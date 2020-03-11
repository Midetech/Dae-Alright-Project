import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCAQMjtcKZz5eEmoMBidN_MBFtZgwsY6tE",
    authDomain: "dae-alright-b3ed8.firebaseapp.com",
    databaseURL: "https://dae-alright-b3ed8.firebaseio.com",
    projectId: "dae-alright-b3ed8",
    storageBucket: "dae-alright-b3ed8.appspot.com",
    messagingSenderId: "375246327887",
    appId: "1:375246327887:web:023d8b5cb86fbd6b9e1a3a",
    measurementId: "G-M711PDZ3R5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;