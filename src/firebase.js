import firebase from "firebase";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyfziIt4vtZ3uIryvjFL6JY2vi7zC4eZ0",
  authDomain: "azm-challenge.firebaseapp.com",
  databaseURL: "https://azm-challenge.firebaseio.com",
  projectId: "azm-challenge",
  storageBucket: "azm-challenge.appspot.com",
  messagingSenderId: "85860087960",
  appId: "1:85860087960:web:3c7043e165538437c0b8ed",
  measurementId: "G-GEJNFBR82G"
};
  const firebaseA = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  export {db, auth};