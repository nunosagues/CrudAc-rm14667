// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHymVawSkRF8ke0HVnHOrWu9DYkmxgU5k",
    authDomain: "rm14667-crud.firebaseapp.com",
    projectId: "rm14667-crud",
    storageBucket: "rm14667-crud.appspot.com",
    messagingSenderId: "424188363393",
    appId: "1:424188363393:web:2886c15a09e0f00a7e0380",
    measurementId: "G-V9D14NFPRB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)