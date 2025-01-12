// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore as getFirestoreFromSDK, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdyiT0InNhSUZ03NpVF052ku39JkMyHNk",
  authDomain: "schtzntest.firebaseapp.com",
  projectId: "schtzntest",
  storageBucket: "schtzntest.firebasestorage.app",
  messagingSenderId: "393955245310",
  appId: "1:393955245310:web:93b8938e83494ca9a4b9af",
  measurementId: "G-VCVM6W8BB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); // Firebase Storage

function getFirestore(app: FirebaseApp): Firestore {
  return getFirestoreFromSDK(app);
}

