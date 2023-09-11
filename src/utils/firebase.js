// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4121e.firebaseapp.com",
  projectId: "blog-4121e",
  storageBucket: "blog-4121e.appspot.com",
  messagingSenderId: "94138892063",
  appId: "1:94138892063:web:0f08314683e19b64d0fa2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
