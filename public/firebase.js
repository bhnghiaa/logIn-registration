// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZWhhEf85tz38lLS6MII9IxF7jRbyLcxg",
    authDomain: "form-login-6f251.firebaseapp.com",
    projectId: "form-login-6f251",
    storageBucket: "form-login-6f251.appspot.com",
    messagingSenderId: "1046330947853",
    appId: "1:1046330947853:web:d782fc1236308e6d81d844",
    measurementId: "G-7FZ8RB422R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);