import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmXXQfhR92fUQgshQ42Z4JXlhvWw-EixM",
    authDomain: "clothingapp-2c580.firebaseapp.com",
    databaseURL: "https://clothingapp-2c580.firebaseio.com",
    projectId: "clothingapp-2c580",
    storageBucket: "clothingapp-2c580.appspot.com",
    messagingSenderId: "631141621239",
    appId: "1:631141621239:web:75e7034b78fa0a97f2e2f2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;