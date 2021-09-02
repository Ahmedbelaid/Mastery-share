import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDh_ePPKOsd7U8hYRq7Lu-opY3U4SaSihs",
  authDomain: "masteryshare.firebaseapp.com",
  projectId: "masteryshare",
  storageBucket: "masteryshare.appspot.com",
  messagingSenderId: "16673435978",
  appId: "1:16673435978:web:21db521ae8c3dc459e91b3",
  measurementId: "G-KPQW015Q32",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = firebase.firestore();

export default firebase;
