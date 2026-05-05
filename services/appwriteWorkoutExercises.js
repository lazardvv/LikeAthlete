// services/appwriteWorkoutExercises.js
import { databases } from './appwriteConfig';
import { Query, ID } from 'appwrite';

const DATABASE_ID = '69f631a1002a93eb8a1c';
const COLLECTION_ID = 'workouts_exercises';

// 0-based ili 1-based; drži konzistentno sa onim što želiš
const START_FROM = 0;

/* ---------------------------
   Helper za paginaciju
---------------------------- */
const listAllDocuments = async (filters = [], pageSize = 100) => {
  let all = [];
  let cursor = null;

  while (true) {
    const q = [...filters, Query.limit(pageSize)];
    if (cursor) q.push(Query.cursorAfter(cursor));

    const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, q);
    all = all.concat(res.documents);

    if (res.documents.length < pageSize) break;
    cursor = res.documents[res.documents.length - 1].$id;
  }
  return all;
};

/* -------------------------------------------
   Vrati sljedeći redni broj (max(order) + 1)
-------------------------------------------- */
const getNextOrderForWorkout = async (userName, workoutName) => {
  const res = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID,
    [
      Query.equal('userId', userName),      // ✅ user name
      Query.equal('workoutName', workoutName),
      Query.orderDesc('order'),
      Query.limit(1)
    ]
  );

  if (!res.documents.length) return START_FROM;
  const top = res.documents[0];
  const currentMax = typeof top.order === 'number' ? top.order : (START_FROM - 1);
  return currentMax + 1;
};

/* ---------------------------
   Update exercise order
---------------------------- */
export const updateExerciseOrder = async (userName, workoutName, exerciseIds) => {
  try {
    // Guard: ažuriraj samo dokumente koji pripadaju korisniku+workoutu
    const allowedDocs = await listAllDocuments([
      Query.equal('userId', userName),
      Query.equal('workoutName', workoutName),
    ]);
    const allowed = new Set(allowedDocs.map(d => d.$id));

    for (let i = 0; i < exerciseIds.length; i++) {
      const documentId = exerciseIds[i];
      if (!allowed.has(documentId)) {
        console.warn(`Skipping document not in this workout/user: ${documentId}`);
        continue;
      }
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId,
        { order: START_FROM + i }
      );
    }
    return true;
  } catch (error) {
    console.error('Error updating exercise order:', error);
    throw error;
  }
};

/* ---------------------------
   Get workouts list (names)
---------------------------- */
export const getWorkouts = async (userName) => {
  try {
    const docs = await listAllDocuments([Query.equal('userId', userName)]);
    return [...new Set(docs.map(doc => doc.workoutName))];
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error;
  }
};

/* ------------------------------------------------------
   Get exercises for a workout (po user name + sortirano)
------------------------------------------------------- */
export const getWorkoutExercises = async (userName, workoutName) => {
  try {
    const documents = await listAllDocuments([
      Query.equal('userId', userName),        // ✅ user name
      Query.equal('workoutName', workoutName),
      Query.orderAsc('order'),                // 📌 zahtijeva index u Appwrite-u
    ]);
    return documents;
  } catch (error) {
    console.error('Error fetching workout exercises:', error);
    throw error;
  }
};

/* -------------------------------------------
   Add exercise to workout (postavlja 'order')
-------------------------------------------- */
export const addExerciseToWorkout = async (exercise, userName, workoutName, details) => {
  try {
    const toIntOrNull = (v) =>
      v !== '' && v !== undefined && v !== null ? parseInt(v, 10) : null;

    const timeValue = toIntOrNull(details.time);
    const repsValue = toIntOrNull(details.reps);
    const loadValue = toIntOrNull(details.load);

    const nextOrder = await getNextOrderForWorkout(userName, workoutName);

    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(), // ako si na starijem SDK-u, koristi 'unique()'
      {
        userId: userName,                              // ✅ user name
        workoutName,
        exerciseId: String(exercise.id),
        exerciseTitle: exercise.title,
        athlete: exercise.athlete,
        athletesSport: exercise.athletesSport,         // ✅ ispravno polje
        videoURL: exercise.videoURL || null,
        videoURL_360p: exercise.videoURL_360p || null,
        poster: exercise.poster || null,
        folderId: exercise.folderId || '',
        userBoard: '',
        reps: repsValue,
        time: timeValue,
        load: loadValue,
        equipment: details.equipment || '',
        notes: details.notes || '',
        order: nextOrder
      }
    );

    return response;
  } catch (error) {
    console.error('Error adding exercise to workout:', error);
    throw error;
  }
};

/* ---------------------------
   Delete workout exercise
---------------------------- */
export const deleteWorkoutExercise = async (documentId) => {
  try {
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId);
  } catch (error) {
    console.error('Error deleting workout exercise:', error);
    throw error;
  }
};

/* ----------------------------------------
   Update workout exercise (edit/replace)
----------------------------------------- */
export const updateWorkoutExercise = async (documentId, details) => {
  try {
    const parseNumber = (value) => {
      if (value === '' || value === null || value === undefined) return null;
      const num = Number(value);
      return isNaN(num) ? null : num;
    };

    const updatePayload = {};

    if ('reps' in details) updatePayload.reps = parseNumber(details.reps);
    if ('time' in details) updatePayload.time = parseNumber(details.time);
    if ('load' in details) updatePayload.load = parseNumber(details.load);

    if ('equipment' in details) updatePayload.equipment = details.equipment ?? '';
    if ('notes' in details) updatePayload.notes = details.notes ?? '';

    // 🎬 meta polja
    if ('exerciseTitle' in details) updatePayload.exerciseTitle = details.exerciseTitle;
    if ('athlete' in details) updatePayload.athlete = details.athlete;
    if ('athletesSport' in details) updatePayload.athletesSport = details.athletesSport; // ✅ singular
    if ('videoURL' in details) updatePayload.videoURL = details.videoURL ?? null;
    if ('videoURL_360p' in details) updatePayload.videoURL_360p = details.videoURL_360p ?? null;
    if ('poster' in details) updatePayload.poster = details.poster ?? null;
    if ('folderId' in details) updatePayload.folderId = details.folderId ?? '';

    // ne diramo 'order'

    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId,
      updatePayload
    );

    return response;
  } catch (error) {
    console.error('Error updating workout exercise:', error);
    throw error;
  }
};

/* ------------------------------------------------------
   Duplicate workout exercise → odmah iza originala
------------------------------------------------------- */
export const duplicateWorkoutExercise = async (userName, workoutName, sourceDocumentId) => {
  try {
    const exercises = await listAllDocuments([
      Query.equal('userId', userName),        // ✅ user name
      Query.equal('workoutName', workoutName),
      Query.orderAsc('order'),
    ]);

    const sourceIndex = exercises.findIndex(d => d.$id === sourceDocumentId);
    if (sourceIndex === -1) throw new Error('Source exercise not found in this workout.');

    const source = exercises[sourceIndex];

    const dupRes = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        userId: userName,                          // ✅ user name
        workoutName,
        exerciseId: source.exerciseId,
        exerciseTitle: source.exerciseTitle,
        athlete: source.athlete,
        athletesSport: source.athletesSport,
        videoURL: source.videoURL ?? null,
        videoURL_360p: source.videoURL_360p ?? null,
        poster: source.poster ?? null,
        folderId: source.folderId ?? '',
        userBoard: source.userBoard ?? '',
        reps: typeof source.reps === 'number' ? source.reps : null,
        time: typeof source.time === 'number' ? source.time : null,
        load: typeof source.load === 'number' ? source.load : null,
        equipment: source.equipment ?? '',
        notes: source.notes ?? '',
        order: (typeof source.order === 'number' ? source.order + 1 : START_FROM)
      }
    );

    const newOrderIds = [
      ...exercises.slice(0, sourceIndex + 1).map(e => e.$id),
      dupRes.$id,
      ...exercises.slice(sourceIndex + 1).map(e => e.$id),
    ];

    await updateExerciseOrder(userName, workoutName, newOrderIds);

    return dupRes;
  } catch (error) {
    console.error('Error duplicating workout exercise:', error);
    throw error;
  }
};

/* ------------------------------------------------------
   Duplicate workout exercise → to the END of the workout
------------------------------------------------------- */
export const duplicateWorkoutExerciseToEnd = async (userName, workoutName, sourceDocumentId) => {
  try {
    // Load the source document to copy its fields
    const exercises = await listAllDocuments([
      Query.equal('userId', userName),
      Query.equal('workoutName', workoutName),
    ]);

    const source = exercises.find(d => d.$id === sourceDocumentId);
    if (!source) throw new Error('Source exercise not found in this workout.');

    const nextOrder = await getNextOrderForWorkout(userName, workoutName);

    const dupRes = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        userId: userName,
        workoutName,
        exerciseId: source.exerciseId,
        exerciseTitle: source.exerciseTitle,
        athlete: source.athlete,
        athletesSport: source.athletesSport,
        videoURL: source.videoURL ?? null,
        videoURL_360p: source.videoURL_360p ?? null,
        poster: source.poster ?? null,
        folderId: source.folderId ?? '',
        userBoard: source.userBoard ?? '',
        reps: typeof source.reps === 'number' ? source.reps : null,
        time: typeof source.time === 'number' ? source.time : null,
        load: typeof source.load === 'number' ? source.load : null,
        equipment: source.equipment ?? '',
        notes: source.notes ?? '',
        order: nextOrder
      }
    );

    return dupRes;
  } catch (error) {
    console.error('Error duplicating workout exercise to end:', error);
    throw error;
  }
};

/* ---------------------------
   Delete entire workout
---------------------------- */
export const deleteWorkout = async (userName, workoutName) => {
  try {
    const exercises = await getWorkoutExercises(userName, workoutName);
    for (const exercise of exercises) {
      await deleteWorkoutExercise(exercise.$id);
    }
    return true;
  } catch (error) {
    console.error('Error deleting workout:', error);
    throw error;
  }
};

/* ---------------------------
   Rename entire workout
---------------------------- */
export const renameWorkout = async (userName, oldWorkoutName, newWorkoutName) => {
  try {
    const exercises = await getWorkoutExercises(userName, oldWorkoutName);
    for (const exercise of exercises) {
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        exercise.$id,
        { workoutName: newWorkoutName }
      );
    }
    return true;
  } catch (error) {
    console.error('Error renaming workout:', error);
    throw error;
  }
};

/* ---------------------------
   Duplicate entire workout (all items) to a new name
   - Copies every document for user+workout to new workout name
   - Reassigns sequential order starting from START_FROM
---------------------------- */
export const duplicateWorkout = async (userName, sourceWorkoutName, newWorkoutName) => {
  try {
    if (!userName) throw new Error('Missing userName');
    const trimmed = String(newWorkoutName || '').trim();
    if (!trimmed) throw new Error('New workout name is required');

    // Load source exercises in order
    const source = await getWorkoutExercises(userName, sourceWorkoutName);
    if (!source.length) return { created: 0, ids: [] };

    const createdIds = [];
    for (let i = 0; i < source.length; i++) {
      const s = source[i];
      const res = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          userId: userName,
          workoutName: trimmed,
          exerciseId: s.exerciseId ?? null,
          exerciseTitle: s.exerciseTitle ?? null,
          athlete: s.athlete ?? null,
          athletesSport: s.athletesSport ?? '',
          videoURL: s.videoURL ?? null,
          videoURL_360p: s.videoURL_360p ?? null,
          poster: s.poster ?? null,
          folderId: s.folderId ?? '',
          userBoard: s.userBoard ?? '',
          reps: typeof s.reps === 'number' ? s.reps : null,
          time: typeof s.time === 'number' ? s.time : null,
          load: typeof s.load === 'number' ? s.load : null,
          equipment: s.equipment ?? '',
          notes: s.notes ?? '',
          order: START_FROM + i,
        }
      );
      createdIds.push(res.$id);
    }

    return { created: createdIds.length, ids: createdIds };
  } catch (error) {
    console.error('Error duplicating workout:', error);
    throw error;
  }
};

/* ------------------------------------------------------
   Add or update REST items between all exercises
   - Removes existing rest entries (athlete === 'Rest' or title contains 'rest') for this workout
   - Inserts a rest (time in seconds) between every adjacent pair
   - Reorders all items to interleave: ex, rest, ex, rest, ...
------------------------------------------------------- */
export const setRestsBetweenExercises = async (userName, workoutName, restSeconds) => {
  try {
    const toPositiveInt = (v) => {
      const n = Number(v);
      if (!isFinite(n) || n <= 0) return null;
      return Math.floor(n);
    };
    const restTime = toPositiveInt(restSeconds);

    // Load all exercises sorted by order
    const all = await listAllDocuments([
      Query.equal('userId', userName),
      Query.equal('workoutName', workoutName),
      Query.orderAsc('order'),
    ]);

    // Separate non-rest and rest items (we consider athlete === 'Rest' as REST)
    const isRestDoc = (d) => String(d.athlete) === 'Rest' || String(d.exerciseTitle || '').toLowerCase().includes('rest');
    const base = all.filter(d => !isRestDoc(d));
    const rests = all.filter(isRestDoc);

    // If no or one base exercise, just delete any existing rests and return
    if (base.length <= 1) {
      for (const r of rests) {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, r.$id);
      }
      // Re-pack order of base only (0..n-1)
      if (base.length) {
        await updateExerciseOrder(userName, workoutName, base.map(b => b.$id));
      }
      return { created: 0, updatedOrder: base.map(b => b.$id) };
    }

    // Remove previous rest docs to avoid duplicates
    for (const r of rests) {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, r.$id);
    }

    // If restTime is null (invalid or <= 0), we only removed previous rests
    if (restTime == null) {
      // Re-pack order of base only (0..n-1)
      await updateExerciseOrder(userName, workoutName, base.map(b => b.$id));
      return { created: 0, updatedOrder: base.map(b => b.$id) };
    }

    // Create rest docs: need base.length - 1 of them
    const createdRestIds = [];
    for (let i = 0; i < base.length - 1; i++) {
      const res = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          userId: userName,
          workoutName,
          exerciseId: 'rest',
          exerciseTitle: 'Rest',
          athlete: 'Rest',
          athletesSport: '',
          videoURL: null,
          videoURL_360p: null,
          poster: null,
          folderId: '',
          userBoard: '',
          reps: null,
          time: restTime,
          load: null,
          equipment: '',
          notes: '',
          order: START_FROM + i // temporary, will be re-ordered below
        }
      );
      createdRestIds.push(res.$id);
    }

    // Build new order: interleave base and rests
    const newOrderIds = [];
    for (let i = 0; i < base.length; i++) {
      newOrderIds.push(base[i].$id);
      if (i < base.length - 1) newOrderIds.push(createdRestIds[i]);
    }

    await updateExerciseOrder(userName, workoutName, newOrderIds);

    return { created: createdRestIds.length, updatedOrder: newOrderIds };
  } catch (error) {
    console.error('Error setting rests between exercises:', error);
    throw error;
  }
};
