// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASEKEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEKEY,
  authDomain: "postpulse-fb382.firebaseapp.com",
  projectId: "postpulse-fb382",
  storageBucket: "postpulse-fb382.appspot.com",
  messagingSenderId: "653083225960",
  appId: "1:653083225960:web:be22da4ff27e654ade30dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);