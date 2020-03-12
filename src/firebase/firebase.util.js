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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
     if (!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get()
     
     if (!snapShot.exits) {
       const { displayName, email } = userAuth
       const createdAt = new Date()
       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
       } catch (error) {
          console.log('error creating user', error.message)
       }
     }

     return userRef
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider()
  // const facebookProvider = new firebase.auth.FacebookAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  // facebookProvider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  // export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)
  export default firebase;