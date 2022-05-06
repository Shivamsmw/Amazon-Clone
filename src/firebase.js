import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA9BHdgUvcQS7G-HL4nUNv8UqiMvd3Ll9o",
  authDomain: "clone-760dd.firebaseapp.com",
  projectId: "clone-760dd",
  storageBucket: "clone-760dd.appspot.com",
  messagingSenderId: "227287434455",
  appId: "1:227287434455:web:c43916651e3bde3a811c92",
  measurementId: "G-PDG7F3FCED",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
