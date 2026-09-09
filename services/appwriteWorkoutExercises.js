// services/appwriteWorkoutExercises.js
import { supabase, DEV_USER_ID, isDevMode } from './appwriteConfig';

const START_FROM = 0;

const normalizeUserId = (userName) => userName || (isDevMode ? DEV_USER_ID : DEV_USER_ID);

const mapWorkoutExercise = (row) => {
  if (!row) return null;

  return {
    ...row,
    $id: String(row.id),
    userId: row.user_id,
    workoutName: row.workout_name,
    exerciseId: String(row.exercise_id),
    exerciseTitle: row.exercise_title,
    athlete: row.athlete,
    athletesSport: row.athletes_sport,
    videoURL: row.video_url,
    videoURL_360p: row.video_url_360p,
    poster: row.poster_url,
    folderId: row.folder_id,
    userBoard: row.user_board,
    order: row.order_index,
    reps: row.reps,
    time: row.time,
    load: row.load,
    equipment: row.equipment,
    notes: row.notes,
  };
};

const getNextOrderForWorkout = async (userName, workoutName) => {
  const userId = normalizeUserId(userName);
  const { data, error } = await supabase
    .from('workout_exercises')
    .select('order_index')
    .eq('user_id', userId)
    .eq('workout_name', workoutName)
    .order('order_index', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  const currentMax = typeof data?.order_index === 'number' ? data.order_index : START_FROM - 1;
  return currentMax + 1;
};

export const updateExerciseOrder = async (userName, workoutName, exerciseIds) => {
  try {
    const userId = normalizeUserId(userName);
    const normalizedIds = (exerciseIds || []).map((id) => Number(id)).filter((id) => !Number.isNaN(id));

    if (!normalizedIds.length) return true;

    const { data: allowedDocs, error: fetchError } = await supabase
      .from('workout_exercises')
      .select('id')
      .eq('user_id', userId)
      .eq('workout_name', workoutName)
      .in('id', normalizedIds);

    if (fetchError) throw fetchError;
    const allowed = new Set((allowedDocs || []).map((d) => Number(d.id)));

    for (let i = 0; i < normalizedIds.length; i += 1) {
      const documentId = normalizedIds[i];
      if (!allowed.has(documentId)) continue;

      const { error } = await supabase
        .from('workout_exercises')
        .update({ order_index: START_FROM + i })
        .eq('id', documentId);

      if (error) throw error;
    }

    return true;
  } catch (error) {
    console.error('Error updating exercise order:', error);
    throw error;
  }
};

export const getWorkouts = async (userName) => {
  try {
    const userId = normalizeUserId(userName);
    const { data, error } = await supabase
      .from('workout_exercises')
      .select('workout_name')
      .eq('user_id', userId);

    if (error) throw error;
    return [...new Set((data || []).map((doc) => doc.workout_name).filter(Boolean))];
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error;
  }
};

export const getWorkoutExercises = async (userName, workoutName) => {
  try {
    const userId = normalizeUserId(userName);
    const { data, error } = await supabase
      .from('workout_exercises')
      .select('*')
      .eq('user_id', userId)
      .eq('workout_name', workoutName)
      .order('order_index', { ascending: true });

    if (error) throw error;
    return (data || []).map(mapWorkoutExercise);
  } catch (error) {
    console.error('Error fetching workout exercises:', error);
    throw error;
  }
};

export const addExerciseToWorkout = async (exercise, userName, workoutName, details) => {
  try {
    const userId = normalizeUserId(userName);
    const toIntOrNull = (value) => (value !== '' && value !== undefined && value !== null ? parseInt(value, 10) : null);

    const nextOrder = await getNextOrderForWorkout(userId, workoutName);

    const { data, error } = await supabase
      .from('workout_exercises')
      .insert({
        user_id: userId,
        workout_name: workoutName,
        exercise_id: String(exercise.id),
        exercise_title: exercise.title,
        athlete: exercise.athlete,
        athletes_sport: exercise.athletesSport,
        video_url: exercise.videoURL || null,
        video_url_360p: exercise.videoURL_360p || null,
        poster_url: exercise.poster || null,
        folder_id: exercise.folderId || '',
        user_board: '',
        reps: toIntOrNull(details.reps),
        time: toIntOrNull(details.time),
        load: toIntOrNull(details.load),
        equipment: details.equipment || '',
        notes: details.notes || '',
        order_index: nextOrder,
      })
      .select()
      .single();

    if (error) throw error;
    return mapWorkoutExercise(data);
  } catch (error) {
    console.error('Error adding exercise to workout:', error);
    throw error;
  }
};

export const deleteWorkoutExercise = async (documentId) => {
  try {
    if (!documentId) return;
    const { error } = await supabase.from('workout_exercises').delete().eq('id', documentId);
    if (error) throw error;
  } catch (error) {
    console.error('Error deleting workout exercise:', error);
    throw error;
  }
};

export const updateWorkoutExercise = async (documentId, details) => {
  try {
    const parseNumber = (value) => {
      if (value === '' || value === null || value === undefined) return null;
      const num = Number(value);
      return Number.isNaN(num) ? null : num;
    };

    const updatePayload = {};

    if ('reps' in details) updatePayload.reps = parseNumber(details.reps);
    if ('time' in details) updatePayload.time = parseNumber(details.time);
    if ('load' in details) updatePayload.load = parseNumber(details.load);
    if ('equipment' in details) updatePayload.equipment = details.equipment ?? '';
    if ('notes' in details) updatePayload.notes = details.notes ?? '';
    if ('exerciseTitle' in details) updatePayload.exercise_title = details.exerciseTitle;
    if ('athlete' in details) updatePayload.athlete = details.athlete;
    if ('athletesSport' in details) updatePayload.athletes_sport = details.athletesSport;
    if ('videoURL' in details) updatePayload.video_url = details.videoURL ?? null;
    if ('videoURL_360p' in details) updatePayload.video_url_360p = details.videoURL_360p ?? null;
    if ('poster' in details) updatePayload.poster_url = details.poster ?? null;
    if ('folderId' in details) updatePayload.folder_id = details.folderId ?? '';

    const { data, error } = await supabase
      .from('workout_exercises')
      .update(updatePayload)
      .eq('id', documentId)
      .select()
      .single();

    if (error) throw error;
    return mapWorkoutExercise(data);
  } catch (error) {
    console.error('Error updating workout exercise:', error);
    throw error;
  }
};

export const duplicateWorkoutExercise = async (userName, workoutName, sourceDocumentId) => {
  try {
    const userId = normalizeUserId(userName);
    const { data: sourceRows, error: sourceError } = await supabase
      .from('workout_exercises')
      .select('*')
      .eq('user_id', userId)
      .eq('workout_name', workoutName)
      .order('order_index', { ascending: true });

    if (sourceError) throw sourceError;
    const source = (sourceRows || []).find((doc) => String(doc.id) === String(sourceDocumentId));
    if (!source) throw new Error('Source exercise not found in this workout.');

    const nextOrder = (typeof source.order_index === 'number' ? source.order_index + 1 : START_FROM);

    const { data, error } = await supabase
      .from('workout_exercises')
      .insert({
        user_id: userId,
        workout_name: workoutName,
        exercise_id: source.exercise_id,
        exercise_title: source.exercise_title,
        athlete: source.athlete,
        athletes_sport: source.athletes_sport,
        video_url: source.video_url,
        video_url_360p: source.video_url_360p,
        poster_url: source.poster_url,
        folder_id: source.folder_id,
        user_board: source.user_board,
        reps: source.reps,
        time: source.time,
        load: source.load,
        equipment: source.equipment,
        notes: source.notes,
        order_index: nextOrder,
      })
      .select()
      .single();

    if (error) throw error;
    return mapWorkoutExercise(data);
  } catch (error) {
    console.error('Error duplicating workout exercise:', error);
    throw error;
  }
};

export const duplicateWorkoutExerciseToEnd = async (userName, workoutName, sourceDocumentId) => {
  try {
    const userId = normalizeUserId(userName);
    const { data: source, error: sourceError } = await supabase
      .from('workout_exercises')
      .select('*')
      .eq('user_id', userId)
      .eq('workout_name', workoutName)
      .eq('id', Number(sourceDocumentId))
      .maybeSingle();

    if (sourceError) throw sourceError;
    if (!source) throw new Error('Source exercise not found in this workout.');

    const nextOrder = await getNextOrderForWorkout(userId, workoutName);

    const { data, error } = await supabase
      .from('workout_exercises')
      .insert({
        user_id: userId,
        workout_name: workoutName,
        exercise_id: source.exercise_id,
        exercise_title: source.exercise_title,
        athlete: source.athlete,
        athletes_sport: source.athletes_sport,
        video_url: source.video_url,
        video_url_360p: source.video_url_360p,
        poster_url: source.poster_url,
        folder_id: source.folder_id,
        user_board: source.user_board,
        reps: source.reps,
        time: source.time,
        load: source.load,
        equipment: source.equipment,
        notes: source.notes,
        order_index: nextOrder,
      })
      .select()
      .single();

    if (error) throw error;
    return mapWorkoutExercise(data);
  } catch (error) {
    console.error('Error duplicating workout exercise to end:', error);
    throw error;
  }
};

export const deleteWorkout = async (userName, workoutName) => {
  try {
    const userId = normalizeUserId(userName);
    const { data, error } = await supabase
      .from('workout_exercises')
      .select('id')
      .eq('user_id', userId)
      .eq('workout_name', workoutName);

    if (error) throw error;
    if (!data || !data.length) return true;

    const ids = data.map((doc) => doc.id);
    const { error: deleteError } = await supabase.from('workout_exercises').delete().in('id', ids);
    if (deleteError) throw deleteError;
    return true;
  } catch (error) {
    console.error('Error deleting workout:', error);
    throw error;
  }
};

export const renameWorkout = async (userName, oldWorkoutName, newWorkoutName) => {
  try {
    const userId = normalizeUserId(userName);
    const { error } = await supabase
      .from('workout_exercises')
      .update({ workout_name: newWorkoutName })
      .eq('user_id', userId)
      .eq('workout_name', oldWorkoutName);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error renaming workout:', error);
    throw error;
  }
};

export const duplicateWorkout = async (userName, sourceWorkoutName, newWorkoutName) => {
  try {
    const userId = normalizeUserId(userName);
    const trimmedName = String(newWorkoutName || '').trim();
    if (!trimmedName) throw new Error('New workout name is required');

    const { data: source, error: sourceError } = await supabase
      .from('workout_exercises')
      .select('*')
      .eq('user_id', userId)
      .eq('workout_name', sourceWorkoutName)
      .order('order_index', { ascending: true });

    if (sourceError) throw sourceError;
    if (!source || !source.length) return { created: 0, ids: [] };

    const rows = source.map((exercise, index) => ({
      user_id: userId,
      workout_name: trimmedName,
      exercise_id: exercise.exercise_id,
      exercise_title: exercise.exercise_title,
      athlete: exercise.athlete,
      athletes_sport: exercise.athletes_sport,
      video_url: exercise.video_url,
      video_url_360p: exercise.video_url_360p,
      poster_url: exercise.poster_url,
      folder_id: exercise.folder_id,
      user_board: exercise.user_board,
      reps: exercise.reps,
      time: exercise.time,
      load: exercise.load,
      equipment: exercise.equipment,
      notes: exercise.notes,
      order_index: START_FROM + index,
    }));

    const { data, error } = await supabase.from('workout_exercises').insert(rows).select();
    if (error) throw error;

    return { created: data.length, ids: data.map((doc) => doc.id) };
  } catch (error) {
    console.error('Error duplicating workout:', error);
    throw error;
  }
};

export const setRestsBetweenExercises = async (userName, workoutName, restSeconds) => {
  try {
    const userId = normalizeUserId(userName);
    const { data, error } = await supabase
      .from('workout_exercises')
      .select('*')
      .eq('user_id', userId)
      .eq('workout_name', workoutName)
      .order('order_index', { ascending: true });

    if (error) throw error;

    const rows = data || [];
    const baseRows = rows.filter((row) => !(String(row.athlete) === 'Rest' || String(row.exercise_title || '').toLowerCase().includes('rest')));
    const restRows = rows.filter((row) => String(row.athlete) === 'Rest' || String(row.exercise_title || '').toLowerCase().includes('rest'));

    if (restRows.length) {
      const restIds = restRows.map((row) => row.id);
      const { error: deleteError } = await supabase.from('workout_exercises').delete().in('id', restIds);
      if (deleteError) throw deleteError;
    }

    const restTime = Number(restSeconds);
    if (!Number.isFinite(restTime) || restTime <= 0 || baseRows.length <= 1) {
      const reordered = baseRows.map((row, index) => ({ ...row, order_index: index }));
      for (const row of reordered) {
        await supabase.from('workout_exercises').update({ order_index: row.order_index }).eq('id', row.id);
      }
      return { created: 0, updatedOrder: reordered.map((row) => String(row.id)) };
    }

    const createdRestIds = [];
    for (let i = 0; i < baseRows.length - 1; i += 1) {
      const { data: newRow, error: insertError } = await supabase
        .from('workout_exercises')
        .insert({
          user_id: userId,
          workout_name: workoutName,
          exercise_id: 'rest',
          exercise_title: 'Rest',
          athlete: 'Rest',
          athletes_sport: '',
          video_url: null,
          video_url_360p: null,
          poster_url: null,
          folder_id: '',
          user_board: '',
          reps: null,
          time: restTime,
          load: null,
          equipment: '',
          notes: '',
          order_index: i,
        })
        .select()
        .single();

      if (insertError) throw insertError;
      createdRestIds.push(newRow.id);
    }

    const reordered = [];
    for (let i = 0; i < baseRows.length; i += 1) {
      reordered.push(baseRows[i].id);
      if (i < baseRows.length - 1) reordered.push(createdRestIds[i]);
    }

    for (let i = 0; i < reordered.length; i += 1) {
      const currentId = reordered[i];
      await supabase.from('workout_exercises').update({ order_index: i }).eq('id', currentId);
    }

    return { created: createdRestIds.length, updatedOrder: reordered.map((id) => String(id)) };
  } catch (error) {
    console.error('Error setting rests between exercises:', error);
    throw error;
  }
};
