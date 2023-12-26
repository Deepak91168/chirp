// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "chirp91168.firebaseapp.com",
  projectId: "chirp91168",
  storageBucket: "chirp91168.appspot.com",
  messagingSenderId: "591162108442",
  appId: "1:591162108442:web:76f9a0e7864bef1be5ffa3",
  measurementId: "G-5CNP9VWHD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;