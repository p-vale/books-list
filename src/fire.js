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
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
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

const mainTitle = document.getElementById('main-title')

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);

async function signIn() {
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
  mainTitle.innerHTML = `${getUserName()}'s book list`
}

function signOutUser() {
  signOut(getAuth());
  mainTitle.innerHTML = 'book list'
}

function isUserSignedIn() {
  return !!getAuth().currentUser;
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

function getUserId() {
  const user = getAuth().currentUser;
  if (user) {
    return user.uid;
  } else {
    return null
  }
}

async function loadLibrary() {
  let library = []
  let loadLibrary = await getDocs(collection(db, getUserId()));
  loadLibrary.forEach((doc) => {
    let book = doc.data()
    book.id = doc.id
    library.push(book)
  })
  return library
}

async function saveTitle(obj) {
  try {
    await addDoc(collection(db, getUserId()), {
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

async function deleteTitle(id) {
  await deleteDoc(doc(db, getUserId(), id))
}

async function toggleRead(id, bool) {
  let book = doc(db, getUserId(), id)
  await updateDoc(book, {read: bool})
}

export {
  signIn,
  signOutUser,
  getUserName,
  isUserSignedIn,
  loadLibrary,
  saveTitle,
  deleteTitle,
  toggleRead
}