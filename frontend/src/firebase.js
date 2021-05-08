import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import FIREBASE_CONFIG from './firebaseConfig.js';

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
