import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmCGjS2mFf6yhi0EkZh6sffsL7ddv4dv4",
    authDomain: "qpid-79365.firebaseapp.com",
    projectId: "qpid-79365",
    storageBucket: "qpid-79365.appspot.com",
    messagingSenderId: "952226016317",
    appId: "1:952226016317:web:49f109330437f957310e54",
    measurementId: "G-NT47V1J6MS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;