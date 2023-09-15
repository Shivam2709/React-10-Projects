// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf99zXaMRbmhZupC9qt7rdtLBpSt-DTPM",
  authDomain: "vite-contact-4c897.firebaseapp.com",
  projectId: "vite-contact-4c897",
  storageBucket: "vite-contact-4c897.appspot.com",
  messagingSenderId: "1096357713941",
  appId: "1:1096357713941:web:0ae42715610ca51538961c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);