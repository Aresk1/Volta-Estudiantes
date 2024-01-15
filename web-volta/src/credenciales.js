// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9b6XrVMfg2QMGKDesFXGQxHc-uCHECi4",
  authDomain: "volta-a89d1.firebaseapp.com",
  projectId: "volta-a89d1",
  storageBucket: "volta-a89d1.appspot.com",
  messagingSenderId: "380685043124",
  appId: "1:380685043124:web:45da0d70890a6e60e89ee1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase