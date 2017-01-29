import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {text: 'Why not start typing here?', favourite: false},
    displayingFavourites: false,
    user: null,
    firebaseApp: null,
    firebaseUIApp: null
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
