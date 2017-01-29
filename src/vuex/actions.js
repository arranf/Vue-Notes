// Actions can be asychronous, Mutations MUST be synchronous. Do Ajax here

export const addNote = (context) => {
    if (context.state.displayingFavourites){
        context.commit('TOGGLE_FAVOURITE_VIEW')
    }
    context.commit('ADD_NOTE')
}

export const deleteNote = ({ commit }) => {
    commit('DELETE_NOTE')
}

export const editNote = ({ commit}, e) => {
    commit('EDIT_NOTE', e.target.value)
}

export const updateActiveNote = ({ commit }, note) => {
    commit ('SET_ACTIVE_NOTE', note)
}

export const toggleFavourite = (context) => {
    if (context.state.displayingFavourites && context.state.activeNote.favourite || !context.state.displayingFavourites){
        context.commit('TOGGLE_FAVOURITE_NOTE')
    }
}

export const toggleFavouriteView = ({ commit }) => {
    commit('TOGGLE_FAVOURITE_VIEW')
}

export const setUser = ({ commit }, user) => {
  commit('SET_USER', user)
}

export const setFirebaseApp = ({commit}, firebaseApp) => {
  commit('SET_FIREBASE_APP', firebaseApp)
}

export const setFirebaseUIApp =  ({commit}, firebaseUIApp) => {
  commit('SET_FIREBASE_UI_APP', firebaseUIApp)
}
