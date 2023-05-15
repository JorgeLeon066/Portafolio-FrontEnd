// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Q7HtSOwJ0AmJodrBFMBsFOO0WIitk2w",
  authDomain: "portafolio-web-api.firebaseapp.com",
  databaseURL: "https://portafolio-web-api-default-rtdb.firebaseio.com",
  projectId: "portafolio-web-api",
  storageBucket: "portafolio-web-api.appspot.com",
  messagingSenderId: "994157879835",
  appId: "1:994157879835:web:6a2b4ee356c4ceb7e04ebe",
  measurementId: "G-GNGRZPKC19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);