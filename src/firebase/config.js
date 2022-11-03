// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Firebase from "firebase/compat/app";
import "firebase/compat/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4nCavHcLVRXLRAPMwmt-7KJL1XsPIi1w",
  authDomain: "playlist-annotator-tutorial.firebaseapp.com",
  projectId: "playlist-annotator-tutorial",
  storageBucket: "playlist-annotator-tutorial.appspot.com",
  messagingSenderId: "1089183324988",
  appId: "1:1089183324988:web:e7d1920de6b8d87edddc39",
  measurementId: "G-5NPQ742MYB"
};


const firebase = Firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export {firebase}