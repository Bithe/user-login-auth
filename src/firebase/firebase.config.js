// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5ybX9bE0wBeQoVkkFrMITL1qrAvxhIU",
  authDomain: "user-login-ff9b8.firebaseapp.com",
  projectId: "user-login-ff9b8",
  storageBucket: "user-login-ff9b8.appspot.com",
  messagingSenderId: "358271895583",
  appId: "1:358271895583:web:81717a559ce03ae9642d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;