import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAx_buU_bmneQqOokHnmaHdtW9j9hNd3Nw',
  authDomain: 'crwn-db-505ba.firebaseapp.com',
  databaseURL: 'https://crwn-db-505ba.firebaseio.com',
  projectId: 'crwn-db-505ba',
  storageBucket: 'crwn-db-505ba.appspot.com',
  messagingSenderId: '100034403352',
  appId: '1:100034403352:web:5f2daaa1b7f96d863f376d',
  measurementId: 'G-D1S8DP703E'
};

export const createUser = async (user, ...additionalData) => {
  if (!user) return;

  const usersRef = firestore.doc(`/users/12343214fd`);
  const snapShot = await usersRef.get();

  if (!snapShot.exists) {
    const { email, displayName } = user;
    const accountCreateDate = new Date();

    try {
      usersRef.set({
        displayName:
          displayName !== null ? displayName : additionalData[0].displayName,
        email: email,
        accountCreateDate: accountCreateDate
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return usersRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
