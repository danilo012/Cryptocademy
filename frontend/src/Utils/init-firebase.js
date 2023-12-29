import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZbHC81j94gFRxgYvqL_c_BZWvP6jKzMc",
    authDomain: "cryptocademy-700311.firebaseapp.com",
    projectId: "cryptocademy-700311",
    storageBucket: "cryptocademy-700311.appspot.com",
    messagingSenderId: "536087255810",
    appId: "1:536087255810:web:65c98bf25ba52ef891401b",
    measurementId: "G-BFKJWMBYZ8"

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
