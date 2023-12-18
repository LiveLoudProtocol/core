import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "liveloud-9a476.firebaseapp.com",
    projectId: "liveloud-9a476",
    storageBucket: "liveloud-9a476.appspot.com",
    messagingSenderId: "15592539573",
    appId: "1:15592539573:web:f605369e05b77779a0c5fc"
  };

function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
    
  }
}

export const app = createFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);