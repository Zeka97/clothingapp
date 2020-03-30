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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

      } catch (error){
        console.log('error creating user',error.message);


      }
    }

    return userRef;

    console.log(snapShot);

    console.log(firestore.doc('users/125125f'));

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;