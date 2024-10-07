// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmhb6lbj6V_qnQgXGxMhdmkW-u3fiEZtY",
  authDomain: "netflixgpt-rj.firebaseapp.com",
  projectId: "netflixgpt-rj",
  storageBucket: "netflixgpt-rj.appspot.com",
  messagingSenderId: "948079160844",
  appId: "1:948079160844:web:0a5fb3d1c9a8b8609f4829",
  measurementId: "G-4T6FT6F8PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);