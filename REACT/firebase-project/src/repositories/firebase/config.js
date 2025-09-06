// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbpIrA-0eHLFEFGhH8py0nGiK3J7xy8wU",
  authDomain: "authentification-app-71aa7.firebaseapp.com",
  projectId: "authentification-app-71aa7",
  storageBucket: "authentification-app-71aa7.firebasestorage.app",
  messagingSenderId: "652518829690",
  appId: "1:652518829690:web:63ff29d5a45b7d62eed5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);