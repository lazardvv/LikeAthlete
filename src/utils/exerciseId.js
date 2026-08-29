export const getExerciseMatchIds = (exercise = {}) => {
  const ids = new Set();

  if (exercise?.$id != null) ids.add(String(exercise.$id));
  if (exercise?.id != null) ids.add(String(exercise.id));
  if (exercise?.exerciseId != null) ids.add(String(exercise.exerciseId));

  return [...ids];
};

export const filterExercisesByBoard = (exercises = [], boardExerciseIds = []) => {
  const allowed = new Set(
    (boardExerciseIds || [])
      .map((value) => String(value).trim())
      .filter(Boolean)
  );

  if (!allowed.size) {
    return [...exercises];
  }

  return exercises.filter((exercise) =>
    getExerciseMatchIds(exercise).some((id) => allowed.has(id))
  );
};
