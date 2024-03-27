// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCyoQ4jL7alxHSPNe43MDSBSrpdIh4NTSg",
authDomain: "netflix-gpt-88a8a.firebaseapp.com",
projectId: "netflix-gpt-88a8a",
storageBucket: "netflix-gpt-88a8a.appspot.com",
messagingSenderId: "255234030470",
appId: "1:255234030470:web:641339af1ee33a023c0a07",
measurementId: "G-DKHPWRW6TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();