import test from 'node:test';
import assert from 'node:assert/strict';
import { filterExercisesByBoard } from './exerciseId.js';

test('filterExercisesByBoard matches Appwrite document ids and original exercise ids', () => {
  const savedExercises = [
    { $id: 'saved-doc-42', exerciseId: 12345, title: 'A' },
    { $id: 'saved-doc-99', exerciseId: 67890, title: 'B' },
  ];

  assert.deepEqual(filterExercisesByBoard(savedExercises, ['saved-doc-42']), [savedExercises[0]]);
  assert.deepEqual(filterExercisesByBoard(savedExercises, [12345]), [savedExercises[0]]);
  assert.deepEqual(filterExercisesByBoard(savedExercises, ['missing']), []);
});
