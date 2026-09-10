import { supabase } from './appwriteConfig';

const STORAGE_BUCKET = String(import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || 'posters').trim() || 'posters';
const EDGE_FUNCTION_NAME = String(import.meta.env.VITE_SUPABASE_EDGE_FUNCTION_NAME || 'vidhold-upload').trim() || 'vidhold-upload';

const slugify = (value) => {
  return String(value || 'exercise')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'exercise';
};

const normalizeRemoteUrl = (value) => {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  return /^https?:\/\/[^\u0000-\u0020]+$/i.test(trimmed) ? trimmed : '';
};

const isSupabaseStorageUrl = (value) => {
  const normalized = normalizeRemoteUrl(value);
  return !!normalized && normalized.includes('/storage/v1/object/public/');
};

const ensureFinalMediaUrl = (value, fallbackLabel = 'media URL') => {
  const url = normalizeRemoteUrl(value);
  if (!url) {
    throw new Error(`Unesite validan ${fallbackLabel}.`);
  }

  if (isSupabaseStorageUrl(url)) {
    throw new Error('Supabase Storage URL je privremena vrednost i ne sme da se upiše kao finalni medijski URL.');
  }

  return url;
};

const buildVidholdMediaUrl = (fileCode) => {
  if (!fileCode) return '';
  return `https://vidhold.com/${fileCode}`;
};

const extractVidholdFinalUrl = (payload) => {
  const candidate =
    payload?.file?.url ||
    payload?.file?.download_url ||
    payload?.file?.media_url ||
    payload?.result?.url ||
    payload?.result?.download_url ||
    payload?.result?.media_url ||
    payload?.url ||
    payload?.download_url ||
    payload?.media_url ||
    '';

  return normalizeRemoteUrl(candidate);
};

const getSupabasePublicUrl = (bucket, path) => {
  if (!bucket || !path) return '';
  const baseUrl = String(import.meta.env.VITE_SUPABASE_URL || '').replace(/\/$/, '');
  if (!baseUrl) return '';
  return `${baseUrl}/storage/v1/object/public/${bucket}/${encodeURIComponent(path)}`;
};

const uploadToCatboxFromUrl = async () => {
  throw new Error('Catbox fallback ne radi iz browser-a jer je CORS blokiran. Potrebno je da se Catbox upload radi sa server-side endpoint-om ili da se koristi samo Vidhold preko Supabase Edge Function.');
};

export const uploadTemporarySupabaseFile = async (file, folder = 'temp') => {
  if (!file) {
    throw new Error('Niste odabrali fajl za privremeni upload.');
  }

  const safeName = slugify(file.name || 'upload') || 'upload';
  const timestamp = Date.now();
  const storagePath = `${folder}/${timestamp}-${safeName}`;

  const { data, error } = await supabase.storage.from(STORAGE_BUCKET).upload(storagePath, file, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type || 'application/octet-stream',
  });

  if (error) throw error;

  const publicUrl = getSupabasePublicUrl(STORAGE_BUCKET, data?.path || storagePath);
  if (!publicUrl) {
    throw new Error('Supabase Storage nije vratio javni URL za privremeni fajl.');
  }

  return {
    bucket: STORAGE_BUCKET,
    path: data?.path || storagePath,
    publicUrl,
  };
};

export const deleteTemporarySupabaseFile = async (storagePath, bucketName = STORAGE_BUCKET) => {
  if (!storagePath) return;

  const { error } = await supabase.storage.from(bucketName).remove([storagePath]);
  if (error) {
    console.warn('Greška pri brisanju privremenog fajla:', error.message || error);
  }
};

export const remoteUploadToVidhold = async (remoteUrl, onProgress) => {
  const sourceUrl = normalizeRemoteUrl(remoteUrl);
  if (!sourceUrl) {
    throw new Error('Unesite validan raw video URL.');
  }

  if (typeof onProgress === 'function') onProgress(15);

  try {
    const { data, error } = await supabase.functions.invoke(EDGE_FUNCTION_NAME, {
      body: { url: sourceUrl },
    });

    console.log('Edge Function response:', data);
    console.log('Edge Function error:', error);

    if (error) {
      throw new Error(error.message || 'Vidhold remote upload nije uspio.');
    }

    if (data && typeof data === 'object' && data.error) {
      throw new Error(String(data.error));
    }

    const payload = data || {};
    const finalUrl = extractVidholdFinalUrl(payload);

    if (!finalUrl) {
      throw new Error('Vidhold Edge Function nije vratio finalni medijski URL nakon završene obrade.');
    }

    if (isSupabaseStorageUrl(finalUrl)) {
      throw new Error('Vidhold Edge Function je vratila privremeni Supabase Storage URL umesto finalnog medijskog URL.');
    }

    if (typeof onProgress === 'function') onProgress(100);
    return finalUrl;
  } catch (error) {
    const message = error?.message || 'Vidhold upload nije uspio.';
    console.error('Vidhold upload failed:', message);
    throw new Error(message);
  }
};

export const resolveRemoteMediaUrls = async ({ videoUrl, posterUrl, onProgress }) => {
  const resolvedVideoUrl = normalizeRemoteUrl(videoUrl);
  const resolvedPosterUrl = normalizeRemoteUrl(posterUrl);

  if (!resolvedVideoUrl) {
    throw new Error('Unesite validan video raw URL.');
  }

  if (!isSupabaseStorageUrl(resolvedVideoUrl)) {
    return {
      video_url: resolvedVideoUrl,
      poster_url: resolvedPosterUrl || null,
    };
  }

  const finalVideoUrl = await remoteUploadToVidhold(resolvedVideoUrl, onProgress);

  return {
    video_url: finalVideoUrl,
    poster_url: resolvedPosterUrl || null,
  };
};

export const generatePosterFileFromVideo = async (videoFile, exerciseTitle = 'exercise') => {
  if (!videoFile) {
    throw new Error('Niste odabrali video fajl za generisanje postera.');
  }

  const videoUrl = URL.createObjectURL(videoFile);

  try {
    const video = await new Promise((resolve, reject) => {
      const element = document.createElement('video');
      element.preload = 'auto';
      element.muted = true;
      element.playsInline = true;
      element.src = videoUrl;
      element.onloadedmetadata = () => resolve(element);
      element.onerror = () => reject(new Error('Nije moguće pročitati video fajl za poster.'));
    });

    const seekTime = Math.min(2, Math.max(0, video.duration ? video.duration * 0.2 : 0));
    video.currentTime = seekTime;

    await new Promise((resolve, reject) => {
      const onSeeked = () => {
        video.removeEventListener('seeked', onSeeked);
        resolve();
      };
      const onError = () => {
        video.removeEventListener('error', onError);
        reject(new Error('Greška pri generisanju postera iz videa.'));
      };

      video.addEventListener('seeked', onSeeked, { once: true });
      video.addEventListener('error', onError, { once: true });

      if (video.readyState >= 2 && !Number.isNaN(video.duration)) {
        video.currentTime = seekTime;
      }
    });

    const canvas = document.createElement('canvas');
    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    const blob = await new Promise((resolve) => {
      canvas.toBlob((result) => resolve(result), 'image/jpeg', 0.82);
    });

    if (!blob) {
      throw new Error('Poster nije mogao da se generiše iz videa.');
    }

    const posterFile = new File([blob], `${Date.now()}-${slugify(exerciseTitle)}.jpg`, {
      type: 'image/jpeg',
    });

    return posterFile;
  } finally {
    URL.revokeObjectURL(videoUrl);
  }
};

export const uploadVideoToVidhold = async (file, onProgress) => {
  if (!file) {
    throw new Error('Niste odabrali fajl.');
  }

  const stagedVideo = await uploadTemporarySupabaseFile(file, 'videos');

  try {
    return await remoteUploadToVidhold(stagedVideo.publicUrl, onProgress);
  } finally {
    await deleteTemporarySupabaseFile(stagedVideo.path, stagedVideo.bucket);
  }
};

export const uploadPosterToVidhold = async (posterFile, onProgress) => {
  if (!posterFile) {
    return '';
  }

  const stagedPoster = await uploadTemporarySupabaseFile(posterFile, 'posters');

  try {
    return await remoteUploadToVidhold(stagedPoster.publicUrl, onProgress);
  } finally {
    await deleteTemporarySupabaseFile(stagedPoster.path, stagedPoster.bucket);
  }
};

export const saveUploadedExercise = async (exercise) => {
  const payload = {
    id: Number(exercise.id),
    athlete: String(exercise.athlete ?? '').trim(),
    title: String(exercise.title ?? '').trim(),
    athletes_sports: String(exercise.athletes_sports ?? exercise.athletesSports ?? '').trim(),
    video_url: exercise.video_url ? ensureFinalMediaUrl(exercise.video_url, 'video URL') : null,
    video_url_360p: exercise.video_url_360p ? ensureFinalMediaUrl(exercise.video_url_360p, 'video 360p URL') : (exercise.video_url ? ensureFinalMediaUrl(exercise.video_url, 'video URL') : null),
    poster_url: exercise.poster_url ? ensureFinalMediaUrl(exercise.poster_url, 'poster URL') : null,
  };

  if (!payload.id || !payload.athlete || !payload.title) {
    throw new Error('Naziv vježbe, athlete i sport su obavezni.');
  }

  const { data, error } = await supabase
    .from('exercises')
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const saveExerciseFromStagedFiles = async ({
  athlete,
  title,
  athletes_sports,
  videoFile,
  posterFile,
  onProgress,
}) => {
  if (!videoFile) {
    throw new Error('Niste odabrali video fajl.');
  }

  const stagedVideo = await uploadTemporarySupabaseFile(videoFile, 'videos');
  const stagedPoster = posterFile ? await uploadTemporarySupabaseFile(posterFile, 'posters') : null;

  let finalVideoUrl = '';
  let finalPosterUrl = '';

  try {
    finalVideoUrl = await remoteUploadToVidhold(stagedVideo.publicUrl, (value) => {
      if (typeof onProgress === 'function') onProgress(value * 0.45);
    });

    if (stagedPoster) {
      finalPosterUrl = stagedPoster.publicUrl;
    }

    const generatedId = Date.now();

    await saveUploadedExercise({
      id: generatedId,
      athlete,
      title,
      athletes_sports,
      video_url: finalVideoUrl,
      video_url_360p: finalVideoUrl,
      poster_url: finalPosterUrl || null,
    });

    if (typeof onProgress === 'function') onProgress(95);

    await deleteTemporarySupabaseFile(stagedVideo.path, stagedVideo.bucket);
    if (stagedPoster) {
      await deleteTemporarySupabaseFile(stagedPoster.path, stagedPoster.bucket);
    }

    if (typeof onProgress === 'function') onProgress(100);

    return {
      video_url: finalVideoUrl,
      poster_url: finalPosterUrl || '',
    };
  } catch (error) {
    await deleteTemporarySupabaseFile(stagedVideo.path, stagedVideo.bucket);
    if (stagedPoster) {
      await deleteTemporarySupabaseFile(stagedPoster.path, stagedPoster.bucket);
    }
    throw error;
  }
};