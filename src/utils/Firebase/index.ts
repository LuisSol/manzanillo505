import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQ_p_f2jq2CieS_XG5dTo7xajrjOgSyqM",
  authDomain: "manzanillo505-2d0f3.firebaseapp.com",
  projectId: "manzanillo505-2d0f3",
  storageBucket: "manzanillo505-2d0f3.appspot.com",
  messagingSenderId: "184734600903",
  appId: "1:184734600903:web:1014119ba551db14a178e2",
  measurementId: "G-QS1WWHHH11",
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
