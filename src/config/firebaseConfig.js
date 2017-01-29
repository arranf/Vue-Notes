/**
 * Created by arran on 29/01/17.
 */
import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: "AIzaSyD0atCD0tCK8Wqp26Hs5rbaNZW7FtcZp7U",
  authDomain: "generic-notes.firebaseapp.com",
  databaseURL: "https://generic-notes.firebaseio.com",
  storageBucket: "generic-notes.appspot.com",
  messagingSenderId: "674872281364"
};
export const firebaseApp = firebase.initializeApp(config)
export const firebaseUIApp = new firebaseui.auth.AuthUI(firebase.auth(firebaseApp))
