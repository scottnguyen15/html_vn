// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaMz0kj4stan_npg4e7XBiMTRtuOIhLFQ",
  authDomain: "html-vn.firebaseapp.com",
  projectId: "html-vn",
  storageBucket: "html-vn.firebasestorage.app",
  messagingSenderId: "680199007915",
  appId: "1:680199007915:web:372e329e3aa88ee114d1ee",
  measurementId: "G-93FZGC30MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);