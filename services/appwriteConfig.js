import { Client, Databases, Account } from 'appwrite';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // ili tvoj self-hosted endpoint
  .setProject('68595ef3002478ec3cd8'); // zamijeni sa stvarnim ID-jem

export const databases = new Databases(client);
export const account = new Account(client);