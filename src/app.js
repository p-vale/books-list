import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const config = {
  apiKey: "AIzaSyDr133hOmQNjPQ256tv1N5azBwLgEnAXfA",
  authDomain: "books-list-ec740.firebaseapp.com",
  projectId: "books-list-ec740",
  storageBucket: "books-list-ec740.appspot.com",
  messagingSenderId: "583745297966",
  appId: "1:583745297966:web:54f739030db1bd213f49bf"
};

async function signIn() {
  console.log('signin')
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

function signOutUser() {
  console.log('signout')
  signOut(getAuth());
}

function isUserSignedIn() {
  return !!getAuth().currentUser;
}

// Initialize Firebase
initializeApp(config);

export {
  signIn,
  signOutUser
}