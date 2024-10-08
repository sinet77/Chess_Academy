// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC4duotiPhxm24hLayu4dP0_Jc7e0AJlo",
  authDomain: "chess-academy-2e548.firebaseapp.com",
  projectId: "chess-academy-2e548",
  storageBucket: "chess-academy-2e548.appspot.com",
  messagingSenderId: "833005564364",
  appId: "1:833005564364:web:f31338d86725c91774ad69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
