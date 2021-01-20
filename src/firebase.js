import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAueAvKIhO1v7a30-Ou9l9tsCep2yeQUMg",
  authDomain: "whatsapp-clone-e95ce.firebaseapp.com",
  projectId: "whatsapp-clone-e95ce",
  storageBucket: "whatsapp-clone-e95ce.appspot.com",
  messagingSenderId: "1061850587290",
  appId: "1:1061850587290:web:12f225a4b38610c3613f23",
  measurementId: "G-674SXEVFQT"
};

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export{ auth, provider };
  export default db;