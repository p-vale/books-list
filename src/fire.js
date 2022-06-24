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
  deleteDoc,
  getDoc,
  getDocs,
  serverTimestamp,
  update,
  updateDoc,
} from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDr133hOmQNjPQ256tv1N5azBwLgEnAXfA",
  authDomain: "books-list-ec740.firebaseapp.com",
  projectId: "books-list-ec740",
  storageBucket: "books-list-ec740.appspot.com",
  messagingSenderId: "583745297966",
  appId: "1:583745297966:web:54f739030db1bd213f49bf"
};


// Initialize Firebase
initializeApp(config);
const db = getFirestore();

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

async function loadLibrary() {
  let library = []
  let loadLibrary = await getDocs(collection(db, "testercollection"));
  loadLibrary.forEach((doc) => {
    let book = doc.data()
    book.id = doc.id
    library.push(book)
  })
  return library
}

async function saveTitle(obj) {
  try {
    await addDoc(collection(db, 'testercollection'), {
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
  await deleteDoc(doc(db, 'testercollection', id))
}

// https://firebase.google.com/docs/reference/js/firestore_
// https://cloud.google.com/firestore/docs/samples/firestore-data-set-field
// https://stackoverflow.com/questions/64137241/toggle-boolean-value-in-firestore-with-react-app
async function toggleRead(id) {
  // const bookRef = db.collection('testercollection').doc(id)
  // const res = await bookRef.update({read: false})

  // https://firebase.google.com/docs/firestore/manage-data/add-data
  let book = doc(db, 'testercollection', id)
  console.log(book.data())
}

export {
  signIn,
  signOutUser,
  getUserId,
  loadLibrary,
  saveTitle,
  deleteTitle,
  toggleRead
}