/**
 * Created by arran on 30/01/17.
 */
import store from 'src/vuex/store'
import { getRef } from 'src/firebase/firebase-config'
import firebase from 'firebase'

export const editNote = (context, e) => {
  const notesRef = getRef('users/' + store.getters.userId + '/notes')
  let updatedNote = {
    text: e.target.value,
    favourite: context.getters.activeNote.favourite
  }
  notesRef.child(context.getters.activeNote['.key']).update(updatedNote).then(
    context.commit('FIND_ACTIVE_NOTE',context.getters.activeNote['.key']))
}

export const updateActiveNote = ({ commit }, note) => {
    commit ('SET_ACTIVE_NOTE', note)
}

export const toggleFavouriteView = ({ commit }) => {
  commit('TOGGLE_FAVOURITE_VIEW')
}


export const addNote = (context) => {
  const notesRef = getRef('users/' + store.getters.userId + '/notes')
  const changeState = () => {
    if (context.getters.displayingFavourites){
      context.commit('TOGGLE_FAVOURITE_VIEW')
    }
  }

  let newNote = {
    text: '✍ ...',
    favourite: false
  }

  const error = () => console.log('Error adding note')

  notesRef.push(newNote).then(changeState, error)
}

export const toggleFavourite = function (context) {
  const notesRef = getRef('users/' + store.getters.userId + '/notes')
  if (context.getters.isCurrentActiveAccessible) {
    let updatedNote = {
      text: context.getters.activeNote.text,
      favourite: !context.getters.activeNote.favourite
    }
    notesRef.child(context.getters.activeNote['.key']).update(updatedNote).then(
      context.commit('FIND_ACTIVE_NOTE',context.getters.activeNote['.key']))
  }
}

export const deleteNote = ( context ) => {
  const notesRef = getRef('users/' + store.getters.userId + '/notes')
  const key = context.getters.activeNote['.key']
  let index = context.state.notes.indexOf(context.getters.activeNote) -1
  if (index < 0){
    index = 0
  }
  notesRef.child(key).remove().then(context.state.activeNote = context.state.notes[index])
}

export const logOut = (context) => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      window.location.reload()
    }, (error) => {
      // An error happened.
      console.log(error)
      window.location.reload()
    })
}

export const authUser = (onFail) => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null || store.getters.user){
        store.commit('SET_USER', user)
      }
      else {
        onFail()
      }
      resolve(user)
    }, (error) => {
      console.log(error)
    })
  })
}

