import { Client, Databases, Account } from 'appwrite';

const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const appwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

if (!appwriteEndpoint || !appwriteProjectId) {
  throw new Error(
    'Missing Appwrite environment variables: VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID must be set.'
  );
}

const client = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

export const databases = new Databases(client);
export const account = new Account(client);