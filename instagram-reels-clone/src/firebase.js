import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoV-WO36WgEjuabbHmcdbtDdwyr6Ze_yY",
    authDomain: "instagram-reels-clone-c899e.firebaseapp.com",
    databaseURL: "https://instagram-reels-clone-c899e.firebaseio.com",
    projectId: "instagram-reels-clone-c899e",
    storageBucket: "instagram-reels-clone-c899e.appspot.com",
    messagingSenderId: "86663803494",
    appId: "1:86663803494:web:343e239f5a2c811e6eb3a7",
    measurementId: "G-2PQ3NNV5Q7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;