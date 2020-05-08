import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCO9mRTUYp9R-9-wIIoi79OkTJKFd3RfKE",
  authDomain: "game-search-31075.firebaseapp.com",
  databaseURL: "https://game-search-31075.firebaseio.com",
  projectId: "game-search-31075",
  storageBucket: "game-search-31075.appspot.com",
  messagingSenderId: "542534150241",
  appId: "1:542534150241:web:db5916ffeef7aa3f54e220"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const signOut = () => auth.signOut();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;