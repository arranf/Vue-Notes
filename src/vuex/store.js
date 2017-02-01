import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)
Vue.use(VuexFire)

const state = {
    notes: null,
    activeNote: null,
    displayingFavourites: false,
    user: null
}

export default new Vuex.Store({
    state,
    mutations: {
      ...VuexFire.mutations,
      ...mutations
    },
    getters,
    actions
})
