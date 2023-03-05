// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaqiKN9NZ5Ymyq6l582igK7vq6kyVADUw",
    authDomain: "react-linkedin-clone-443f0.firebaseapp.com",
    projectId: "react-linkedin-clone-443f0",
    storageBucket: "react-linkedin-clone-443f0.appspot.com",
    messagingSenderId: "373915949705",
    appId: "1:373915949705:web:f6efab5835c78c8e1f0458"
  };
  

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db}