// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-hwqEcVxoDrdOIbcYgbPVN8_nEwBlVk",
  authDomain: "bughunts-81559.firebaseapp.com",
  projectId: "bughunts-81559",
  storageBucket: "bughunts-81559.firebasestorage.app",
  messagingSenderId: "1055351001499",
  appId: "1:1055351001499:web:3da09d426cd924e542113e",
  measurementId: "G-HYB8MQ40BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };