// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO340vT9szxmQeW48XsW_lUPAdppoEZBM",
  authDomain: "dashboarddb-5d3c9.firebaseapp.com",
  projectId: "dashboarddb-5d3c9",
  storageBucket: "dashboarddb-5d3c9.appspot.com",
  messagingSenderId: "861400260946",
  appId: "1:861400260946:web:0d92cd147c71ac966b9a8b",
  measurementId: "G-XF82X6S43X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();