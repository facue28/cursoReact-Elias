import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALRK1HKAKiyu4Ag9AbANj9pTFMzfhi6QY",
    authDomain: "tiendon-da9f7.firebaseapp.com",
    projectId: "tiendon-da9f7",
    storageBucket: "tiendon-da9f7.appspot.com",
    messagingSenderId: "448408385794",
    appId: "1:448408385794:web:cc8736657d4eb42bcdea1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
