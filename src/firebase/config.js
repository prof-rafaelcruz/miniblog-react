import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjStBP9IEZAk94riaYUwiHWdqO4_K0B8w",
  authDomain: "miniglog-504a9.firebaseapp.com",
  projectId: "miniglog-504a9",
  storageBucket: "miniglog-504a9.firebasestorage.app",
  messagingSenderId: "1094704368637",
  appId: "1:1094704368637:web:1836f01e6a7afb52efa794"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };