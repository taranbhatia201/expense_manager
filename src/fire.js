import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDCo0vzXjE3c_jk6P1rf8vtWCA7uWkytfg",
    authDomain: "expense-tracker-cf3d7.firebaseapp.com",
    projectId: "expense-tracker-cf3d7",
    storageBucket: "expense-tracker-cf3d7.appspot.com",
    messagingSenderId: "944298097934",
    appId: "1:944298097934:web:bf289de6834b29e9abab5f",
    measurementId: "G-ZT6ZT9JSDP"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;