export const ADD_NOTE = (state) => {
  const newNote = {
      text: '✍ ...',
      favourite: false
  }
  state.notes.push(newNote)
  state.activeNote = newNote
}

export const EDIT_NOTE = (state, text) => {
  state.activeNote.text = text
}

export const DELETE_NOTE = (state) => {
  let index = state.notes.indexOf(state.activeNote)
  if (index != -1){
      state.notes.splice(index, 1)
      state.activeNote = state.notes[0]
  }
}

export const TOGGLE_FAVOURITE_NOTE = (state) => {
  if (state.activeNote != null){
    state.activeNote.favourite = !state.activeNote.favourite
  }
}

export const SET_ACTIVE_NOTE = (state, note) => {
  state.activeNote = note
}

export const TOGGLE_FAVOURITE_VIEW = (state) => {
  state.displayingFavourites = !state.displayingFavourites
}

export const SET_USER = (state, user) => {
  state.user = user
}

export const SET_FIREBASE_APP = (state, firebaseApp) => {
  console.log('SET_FB_APP')
  state.firebaseApp = firebaseApp
}

export const SET_FIREBASE_UI_APP = (state, firebaseUIApp) => {
  console.log('SET_FB_UI_APP')
  state.firebaseUIApp = firebaseUIApp
}
