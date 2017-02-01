/**
 * Created by arran on 30/01/17.
 */
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD0atCD0tCK8Wqp26Hs5rbaNZW7FtcZp7U",
  authDomain: "generic-notes.firebaseapp.com",
  databaseURL: "https://generic-notes.firebaseio.com",
  storageBucket: "generic-notes.appspot.com",
  messagingSenderId: "674872281364"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export const getRef = function (path) {
  return db.ref(path)
}

export default { db, getRef }
