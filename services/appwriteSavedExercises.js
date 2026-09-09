// services/appwriteSavedExercises.js
import { supabase, DEV_USER_ID, isDevMode } from './appwriteConfig';

const normalizeUserId = (userName) => userName || (isDevMode ? DEV_USER_ID : DEV_USER_ID);

const mapSavedExercise = (row) => {
  if (!row) return null;

  return {
    ...row,
    $id: String(row.id),
    userId: row.user_id,
    exerciseId: String(row.exercise_id),
    savedAt: row.saved_at,
    exerciseTitle: row.exercise_title,
    athlete: row.athlete,
    athletesSport: row.athletes_sport,
    videoURL: row.video_url,
    videoURL_360p: row.video_url_360p,
    poster: row.poster_url,
  };
};

export const getSavedExercises = async (userName) => {
  try {
    const userId = normalizeUserId(userName);
    const { data, error } = await supabase
      .from('saved_exercises')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []).map(mapSavedExercise);
  } catch (error) {
    console.error('Greška pri dohvatanju sačuvanih vježbi:', error);
    throw error;
  }
};

export const saveExercise = async (exercise, userName) => {
  try {
    const userId = normalizeUserId(userName);
    const exerciseId = String(exercise.id ?? exercise.exerciseId ?? '');

    const { data: existing, error: existingError } = await supabase
      .from('saved_exercises')
      .select('id')
      .eq('user_id', userId)
      .eq('exercise_id', exerciseId)
      .maybeSingle();

    if (existingError) throw existingError;
    if (existing) {
      console.log('Vježba je već sačuvana.');
      return null;
    }

    const { data, error } = await supabase
      .from('saved_exercises')
      .insert({
        user_id: userId,
        exercise_id: exerciseId,
        saved_at: new Date().toISOString(),
        exercise_title: exercise.title,
        athlete: exercise.athlete,
        athletes_sport: exercise.athletesSport,
        video_url: exercise.videoURL || null,
        video_url_360p: exercise.videoURL_360p || null,
        poster_url: exercise.poster || null,
      })
      .select()
      .single();

    if (error) throw error;
    return mapSavedExercise(data);
  } catch (error) {
    console.error('Greška pri čuvanju vježbe:', error);
    throw error;
  }
};

export const deleteSavedExercise = async (documentId) => {
  try {
    if (!documentId) return;

    const { error } = await supabase
      .from('saved_exercises')
      .delete()
      .eq('id', documentId);

    if (error) throw error;
  } catch (error) {
    console.error('Greška pri brisanju vježbe:', error);
    throw error;
  }
};