import { supabase, DEV_USER_ID, isDevMode } from './appwriteConfig';

const normalizeUserId = (userId) => userId || (isDevMode ? DEV_USER_ID : DEV_USER_ID);

export const addExerciseToBoard = async (userId, exerciseId, boardName) => {
  try {
    const normalizedUserId = normalizeUserId(userId);
    const targetExerciseId = String(exerciseId);
    const targetBoardName = String(boardName).trim();

    const { data: existing, error: existingError } = await supabase
      .from('user_boards')
      .select('id')
      .eq('user_id', normalizedUserId)
      .eq('exercise_id', targetExerciseId)
      .eq('board_name', targetBoardName)
      .maybeSingle();

    if (existingError) throw existingError;
    if (existing) return null;

    const { data, error } = await supabase
      .from('user_boards')
      .insert({
        user_id: normalizedUserId,
        exercise_id: targetExerciseId,
        board_name: targetBoardName,
      })
      .select()
      .single();

    if (error) throw error;
    return {
      ...data,
      $id: String(data.id),
      userId: data.user_id,
      exerciseId: data.exercise_id,
      boardName: data.board_name,
    };
  } catch (error) {
    console.error('Greška pri dodavanju vježbe u board:', error);
    throw error;
  }
};

export const getBoardsForUser = async (userId) => {
  try {
    const normalizedUserId = normalizeUserId(userId);
    const { data, error } = await supabase
      .from('user_boards')
      .select('board_name')
      .eq('user_id', normalizedUserId);

    if (error) throw error;
    return [...new Set((data || []).map((doc) => doc.board_name).filter(Boolean))];
  } catch (error) {
    console.error('Greška pri dohvatanju boardova:', error);
    throw error;
  }
};

export const getExercisesForBoard = async (userId, boardName) => {
  try {
    const normalizedUserId = normalizeUserId(userId);
    const { data, error } = await supabase
      .from('user_boards')
      .select('exercise_id')
      .eq('user_id', normalizedUserId)
      .eq('board_name', boardName);

    if (error) throw error;
    return (data || []).map((doc) => String(doc.exercise_id));
  } catch (error) {
    console.error('Greška pri dohvatanju vježbi za board:', error);
    throw error;
  }
};

export const getBoardsForExercise = async (userId, exerciseId) => {
  try {
    const normalizedUserId = normalizeUserId(userId);
    const { data, error } = await supabase
      .from('user_boards')
      .select('board_name')
      .eq('user_id', normalizedUserId)
      .eq('exercise_id', String(exerciseId));

    if (error) throw error;
    return (data || []).map((doc) => doc.board_name);
  } catch (error) {
    console.error('Greška pri dohvatanju boardova za vježbu:', error);
    throw error;
  }
};

export const removeExerciseFromBoard = async (userId, exerciseId, boardName) => {
  try {
    const normalizedUserId = normalizeUserId(userId);
    const { data, error } = await supabase
      .from('user_boards')
      .select('id')
      .eq('user_id', normalizedUserId)
      .eq('exercise_id', String(exerciseId))
      .eq('board_name', boardName)
      .maybeSingle();

    if (error) throw error;
    if (!data) return;

    const deleteError = await supabase.from('user_boards').delete().eq('id', data.id);
    if (deleteError.error) throw deleteError.error;
  } catch (error) {
    console.error('Greška pri uklanjanju boarda iz vježbe:', error);
    throw error;
  }
};
