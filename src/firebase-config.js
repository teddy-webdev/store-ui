// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA246WZXwFAa-knvuXToXe_uXxSn4vwfA0",
  authDomain: "subscription-discount-8d09d.firebaseapp.com",
  projectId: "subscription-discount-8d09d",
  storageBucket: "subscription-discount-8d09d.appspot.com",
  messagingSenderId: "697674317735",
  appId: "1:697674317735:web:63aa60eda1d96b11af0082",
  measurementId: "G-PG3BXHXLRL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
