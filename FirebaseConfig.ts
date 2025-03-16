// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSjgrV_inFBBP2vu8YeYPS-Ui2JXtIOKE",
  authDomain: "bubbledb-318f3.firebaseapp.com",
  projectId: "bubbledb-318f3",
  storageBucket: "bubbledb-318f3.firebasestorage.app",
  messagingSenderId: "144098554492",
  appId: "1:144098554492:web:a152cb105ee5dbd0d94ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);