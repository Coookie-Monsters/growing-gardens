import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAZgGyFLpoToe6P3e6evWvn8BbPBEkXfzM',
  authDomain: 'growing-gardens-28cbc.firebaseapp.com',
  databaseURL: 'https://growing-gardens-28cbc.firebaseio.com',
  projectId: 'growing-gardens-28cbc',
  storageBucket: 'growing-gardens-28cbc.appspot.com',
  messagingSenderId: '952416022915'
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
