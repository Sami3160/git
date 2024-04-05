// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig:{
    apiKey:string,
    authDomain:string,
    projectId:string,
    storageBucket:string,
    messagingSenderId:string,
    appId:string,
    measurementId:string
} = {

  apiKey: "AIzaSyBVxnqD-hfwefmwUpVmLhjSWLZgwPf6mhM",

  authDomain: "git-notes-4dc75.firebaseapp.com",

  projectId: "git-notes-4dc75",

  storageBucket: "git-notes-4dc75.appspot.com",

  messagingSenderId: "520762389922",

  appId: "1:520762389922:web:5731904297ea71be3d6efb",

  measurementId: "G-13V20ESP01"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db, analytics, app};

