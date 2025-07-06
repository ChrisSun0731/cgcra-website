import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCwdb1t2EiJ6LOj-9zl4xNW5XKVqujykyk',
  authDomain: 'cgcrawebsite.firebaseapp.com',
  projectId: 'cgcrawebsite',
  storageBucket: 'cgcrawebsite.firebasestorage.app',
  messagingSenderId: '757567516206',
  appId: '1:757567516206:web:8eeda26b465e676eb279bf',
  measurementId: 'G-J7CSZNBDTP',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
