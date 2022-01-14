import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import config from "./confing";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: config.FIREBASE_DATABASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_URL,
  databaseURL: config.FIREBASE_DATABASE_URL,
  storageBucket: config.FIREBASE_STORAGE_URL,
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth();

//email signup
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
//email signin
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const database = getDatabase(app);
