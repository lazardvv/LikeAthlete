// services/appwriteSavedExercises.js
import { databases } from './appwriteConfig';
import { Query, ID } from 'appwrite';

const DATABASE_ID = '68e4b6460001f8b0b89d';
const COLLECTION_ID = 'saved_exercises';

/**
 * Vraća sve sačuvane vježbe za korisnika koristeći USER NAME.
 */
export const getSavedExercises = async (userName) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.equal('userId', userName),     // ✅ user name
        Query.orderDesc('$createdAt'),       // opcionalno: najnovije prve
        // Query.limit(100),                  // ako imaš >100, ubaci cursorAfter paginaciju
      ]
    );
    return response.documents;
  } catch (error) {
    console.error('Greška pri dohvatanju sačuvanih vježbi:', error);
    throw error;
  }
};

/**
 * Sačuvaj vježbu za korisnika koristeći USER NAME kao 'userId'.
 * Sprečava duplikate po (userId, exerciseId).
 */
export const saveExercise = async (exercise, userName) => {
  try {
    const exerciseIdNum = Number(exercise.id);

    // Pre-check duplikata
    const existing = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.equal('userId', userName),         // ✅ user name
        Query.equal('exerciseId', exerciseIdNum),
        Query.limit(1),
      ]
    );

    if (existing.total > 0) {
      console.log('Vježba je već sačuvana.');
      return null;
    }

    // Kreiranje novog dokumenta
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(), // Ako si na starijem SDK-u, zamijeni sa 'unique()'
      {
        userId: userName,                         // ✅ user name
        exerciseId: exerciseIdNum,
        savedAt: new Date().toISOString(),
        exerciseTitle: exercise.title,
        athlete: exercise.athlete,
        athletesSport: exercise.athletesSport,    // ✅ ispravljeno (bez 's' na kraju)
        videoURL: exercise.videoURL || null,
        videoURL_360p: exercise.videoURL_360p || null,
        poster: exercise.poster || null,
      }
    );

    return response;
  } catch (error) {
    console.error('Greška pri čuvanju vježbe:', error);
    throw error;
  }
};

export const deleteSavedExercise = async (documentId) => {
  try {
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId);
  } catch (error) {
    console.error('Greška pri brisanju vježbe:', error);
    throw error;
  }
};