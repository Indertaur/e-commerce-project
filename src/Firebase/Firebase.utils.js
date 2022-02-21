import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBzNgnMRomyaELDCqm6J0CBPFiD1BEN6_Y",
    authDomain: "clothing-db-a0b33.firebaseapp.com",
    projectId: "clothing-db-a0b33",
    storageBucket: "clothing-db-a0b33.appspot.com",
    messagingSenderId: "689485527477",
    appId: "1:689485527477:web:ff93d17662de50c36881fc",
    measurementId: "G-WYHTRG3KED"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;