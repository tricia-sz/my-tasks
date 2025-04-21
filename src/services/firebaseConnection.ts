// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlBYYwLkVSlOhGsvX9bSEsmqjCU4uXSS0",
  authDomain: "mytasks-b056e.firebaseapp.com",
  projectId: "mytasks-b056e",
  storageBucket: "mytasks-b056e.firebasestorage.app",
  messagingSenderId: "882638849458",
  appId: "1:882638849458:web:2344e5a42bd77f9d7310ab"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp)

export {db}