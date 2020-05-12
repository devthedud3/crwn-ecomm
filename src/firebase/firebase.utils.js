import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAk_BPS-hf8IRkey3loe-dPUuB2dsr5RQU',
  authDomain: 'crwn-db-758c1.firebaseapp.com',
  databaseURL: 'https://crwn-db-758c1.firebaseio.com',
  projectId: 'crwn-db-758c1',
  storageBucket: 'crwn-db-758c1.appspot.com',
  messagingSenderId: '34556014422',
  appId: '1:34556014422:web:b5cbb65a8deb14410bb0f7',
  measurementId: 'G-H1VE6RT8EP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
