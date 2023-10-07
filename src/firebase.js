import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

//put api key and auth domain in .env file
const firebaseConfig = {
  apiKey: "AIzaSyAseODKUw_CA1LxHD27fAxgFE8miDSAB_E",
  authDomain: "chat-30acf.firebaseapp.com",
  projectId: "chat-30acf",
  storageBucket: "chat-30acf.appspot.com",
  messagingSenderId: "704904712114",
  appId: "1:704904712114:web:efc721389895b7b128deab",
  measurementId: "G-PSEDG8LD6B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();