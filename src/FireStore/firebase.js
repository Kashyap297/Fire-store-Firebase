// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmehl7wHMNstLTtYMP00cclyGGmHYjTQ8",
  authDomain: "firestore-f6706.firebaseapp.com",
  projectId: "firestore-f6706",
  storageBucket: "firestore-f6706.appspot.com",
  messagingSenderId: "1066725661015",
  appId: "1:1066725661015:web:0f24e32a80dbdc5de50612",
  measurementId: "G-4SBWKD81BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
