
import * as firebase from 'firebase/app';
// You don't need to import firebase/app either since it's being imported above
import 'firebase/auth';
import 'firebase/firestore';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBn7mt8U8L6Nxx0Iwx7BGqrj6AmFTgaxhc",
    authDomain: "letmeask-64ccf.firebaseapp.com",
    databaseURL: "https://letmeask-64ccf-default-rtdb.firebaseio.com",
    projectId: "letmeask-64ccf",
    storageBucket: "letmeask-64ccf.appspot.com",
    messagingSenderId: "249354890652",
    appId: "1:249354890652:web:6a7845a13cc37ff19d6c59"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
  