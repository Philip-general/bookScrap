import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import config from "./confing";

export const firebaseConfig = {
  apiKey: config.FIREBASE_DATABASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_URL,
  databaseURL: config.FIREBASE_DATABASE_URL,
  storageBucket: config.FIREBASE_STORAGE_URL,
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
