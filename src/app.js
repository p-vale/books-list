import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'

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

function getUserId() {
  const user = getAuth().currentUser;
  if (user) {
    return user.uid;
  } else {
    return null
  }
}

function loadLibrary() {
  const recentLibraryQuery = query(collection(getFirestore(), 'testercollection'), orderBy('timestamp'), limit(50));
  onSnapshot(recentLibraryQuery, function(snapshot) {
    snapshot.docChanges().forEach((change) => {
      console.log(change.doc.data())
    });
  });
}

async function saveTitle(obj) {
  try {
    await addDoc(collection(getFirestore(), 'testercollection'), {
      title: obj.title,
      author: obj.author,
      year: obj.year,
      read: obj.read,
      timestamp: serverTimestamp()
    });
  }
  catch(error) {
    console.error('Error writing new book to Firebase Database', error);
  }
}

// Initialize Firebase
initializeApp(config);

export {
  signIn,
  signOutUser,
  getUserId,
  loadLibrary,
  saveTitle
}