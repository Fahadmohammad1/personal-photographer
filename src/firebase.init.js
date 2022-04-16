// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEGqnyKFMU4f9A9FPj1fTLwQ-WoosnbAQ",
  authDomain: "personal-wedding-photographer.firebaseapp.com",
  projectId: "personal-wedding-photographer",
  storageBucket: "personal-wedding-photographer.appspot.com",
  messagingSenderId: "326341358688",
  appId: "1:326341358688:web:e411d77fc939c989febf05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
