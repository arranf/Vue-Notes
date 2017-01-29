export const favouriteNotes = state => {
    return state.notes.filter( note => note.favourite )
}

export const user = state => state.user
export const firebaseApp = state => state.firebaseApp
export const firebaseUIApp = state => state.firebaseUIApp
