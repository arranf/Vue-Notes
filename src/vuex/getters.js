export const activeNote = state =>  state.activeNote

export const displayingFavourites = state => state.displayingFavourites

export const user = state => state.user

export const userId = state => {
  return state.user == null ? '' : state.user.uid
}

export const isCurrentFavourite = state => {
  return state.activeNote != null && state.activeNote.favourite
}

export const isCurrentActiveAccessible = state => {
  return (state.activeNote != null && ( (state.displayingFavourites && state.activeNote.favourite) || !state.displayingFavourites ) && state.notes.length > 0 )
}

export const notes = state => {
  return state.displayingFavourites ? state.notes.filter( note => note.favourite ) : state.notes
}


