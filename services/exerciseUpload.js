import { supabase } from './appwriteConfig';

const slugify = (value) => {
  return String(value || 'exercise')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'exercise';
};

const uploadFileToCatbox = async (file, onProgress) => {
  if (!file) {
    throw new Error('Niste odabrali fajl.');
  }

  const uploadUrl = import.meta.env.VITE_UPLOAD_API_URL || 'http://localhost:3001/upload-catbox';
  const formData = new FormData();
  formData.append('file', file, file.name);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && typeof onProgress === 'function') {
        const percent = Math.round((event.loaded / event.total) * 100);
        onProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        let message = 'Upload nije uspio.';
        try {
          const payload = JSON.parse(xhr.responseText);
          message = payload?.error || message;
        } catch {
          message = xhr.responseText || message;
        }
        reject(new Error(message));
        return;
      }

      try {
        const payload = JSON.parse(xhr.responseText);
        if (!payload?.url || !/^https?:\/\//i.test(payload.url)) {
          throw new Error('Catbox upload nije vratio validan URL.');
        }
        resolve(payload.url);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = () => reject(new Error('Upload nije uspio. Proverite vezu i pokušajte ponovo.'));
    xhr.send(formData);
  });
};

export const uploadVideoToCatbox = async (file, onProgress) => {
  return uploadFileToCatbox(file, onProgress);
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

export const uploadPosterToCatbox = async (posterFile, onProgress) => {
  return uploadFileToCatbox(posterFile, onProgress);
};

export const saveUploadedExercise = async (exercise) => {
  const payload = {
    id: Number(exercise.id),
    athlete: String(exercise.athlete ?? '').trim(),
    title: String(exercise.title ?? '').trim(),
    athletes_sports: String(exercise.athletes_sports ?? exercise.athletesSports ?? '').trim(),
    video_url: exercise.video_url || null,
    video_url_360p: exercise.video_url_360p || exercise.video_url || null,
    poster_url: exercise.poster_url || null,
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
