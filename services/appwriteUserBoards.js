import { databases } from './appwriteConfig';
import { Query } from 'appwrite';

const DATABASE_ID = '68e4b6460001f8b0b89d';
const COLLECTION_ID = 'userBoards';

export const addExerciseToBoard = async (userId, exerciseId, boardName) => {
  try {
    const existing = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('userId', userId),
      Query.equal('exerciseId', exerciseId),
      Query.equal('boardName', boardName),
    ]);

    if (existing.total > 0) return null;

    const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
      userId,
      exerciseId,
      boardName,
      
    });

    return response;
  } catch (error) {
    console.error('Greška pri dodavanju vježbe u board:', error);
    throw error;
  }
};

export const getBoardsForUser = async (userId) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('userId', userId),
    ]);

    const uniqueBoards = [...new Set(response.documents.map(doc => doc.boardName))];
    return uniqueBoards;
  } catch (error) {
    console.error('Greška pri dohvatanju boardova:', error);
    throw error;
  }
};

export const getExercisesForBoard = async (userId, boardName) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('userId', userId),
      Query.equal('boardName', boardName),
    ]);

    return response.documents.map(doc => doc.exerciseId);
  } catch (error) {
    console.error('Greška pri dohvatanju vježbi za board:', error);
    throw error;
  }
};

export const getBoardsForExercise = async (userId, exerciseId) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('userId', userId),
      Query.equal('exerciseId', exerciseId),
    ]);

    return response.documents.map(doc => doc.boardName);
  } catch (error) {
    console.error('Greška pri dohvatanju boardova za vježbu:', error);
    throw error;
  }
};

export const removeExerciseFromBoard = async (userId, exerciseId, boardName) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('userId', userId),
      Query.equal('exerciseId', exerciseId),
      Query.equal('boardName', boardName),
    ]);

    if (response.total === 0) return;

    const docId = response.documents[0].$id;

    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, docId);
  } catch (error) {
    console.error('Greška pri uklanjanju boarda iz vježbe:', error);
    throw error;
  }
};
