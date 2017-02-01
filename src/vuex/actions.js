/**
 * Created by arran on 30/01/17.
 */
import firebase from 'firebase'

import {notesRef} from '../firebase/firebase-config'

export const editNote = ({ commit}, e) => {
    commit('EDIT_NOTE', e.target.value)
}

export const updateActiveNote = ({ commit }, note) => {
    commit ('SET_ACTIVE_NOTE', note)
}

export const toggleFavouriteView = ({ commit }) => {
  commit('TOGGLE_FAVOURITE_VIEW')
}


export const addNote = (context) => {
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
  const key = context.getters.activeNote['.key']
  let index = context.state.notes.indexOf(context.getters.activeNote) -1
  if (index < 0){
    index = 0
  }
  notesRef.child(key).remove().then(context.state.activeNote = context.state.notes[index])
}
