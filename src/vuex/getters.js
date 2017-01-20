export const favouriteNotes = state => {
    return state.notes.filter( note => note.favourite )
}
