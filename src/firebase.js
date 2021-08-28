import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp( {
  apiKey: "AIzaSyBE4bFUV3h1kEbL9i3NOm7mFJCvC_J3MAw",
  authDomain: "challenge-28254.firebaseapp.com",
  projectId: "challenge-28254",
  storageBucket: "challenge-28254.appspot.com",
  messagingSenderId: "1013374278291",
  appId: "1:1013374278291:web:f3f2a66cdebabd2806cb66",
  measurementId: "G-TCKRFYCXQD"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db,auth};