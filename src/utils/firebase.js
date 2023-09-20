// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TO keep getAuth() centralized
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAswp_DzF0t8YCirAbGsAytCLIa-4ADYI",
  authDomain: "netflix-gpt-e9d7a.firebaseapp.com",
  projectId: "netflix-gpt-e9d7a",
  storageBucket: "netflix-gpt-e9d7a.appspot.com",
  messagingSenderId: "442724398977",
  appId: "1:442724398977:web:2ea1594d01150bc1d45a80",
  measurementId: "G-WZDR6HWT2Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getAuth()
export const auth = getAuth();
