import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCN7FJB2s2Ht8oR3LTWzvWO60eYbHeu_HI",
  authDomain: "crwn-clothing-98f36.firebaseapp.com",
  databaseURL: "https://crwn-clothing-98f36.firebaseio.com",
  projectId: "crwn-clothing-98f36",
  storageBucket: "crwn-clothing-98f36.appspot.com",
  messagingSenderId: "240422982176",
  appId: "1:240422982176:web:2d3680489281fb7846a245",
  measurementId: "G-3S8L27TY84",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
