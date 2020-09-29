import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnedFpkpO11qezjCqPSgyr7Mo8EVP5C1o",
  authDomain: "dentalou.firebaseapp.com",
  databaseURL: "https://dentalou.firebaseio.com",
  projectId: "dentalou",
  storageBucket: "dentalou.appspot.com",
  messagingSenderId: "1070386331673",
  appId: "1:1070386331673:web:ec3d93918db2561ddb6a88",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
