export const SET_ACTIVE_NOTE = (state, note) => {
  state.activeNote = note
}

export const FIND_ACTIVE_NOTE = (state, key) => {
    let toBeActive = state.notes.find( note => note['.key'] === key)
    state.activeNote = toBeActive
}

export const TOGGLE_FAVOURITE_VIEW = (state) => {
  state.displayingFavourites = !state.displayingFavourites
}

export const SET_USER = (state, user) => {
  // console.log(user)
  state.user = user
}
