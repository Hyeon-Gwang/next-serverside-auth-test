import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,

  authDomain: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_AUTH_ODOMAIN,

  projectId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_PROJECT_ID,

  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_STORAGE_BUCKET,

  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_MESSAGINGSENDER_ID,

  appId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_APP_ID,

  measurementId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_MEASUREMENT_ID

};



export const fbase = initializeApp(firebaseConfig)
export const fbaseAuth = getAuth(fbase)
export const fbaseFirestore = getFirestore(fbase)
export const fbaseStorage = getStorage(fbase)