import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import router from './config/router'
import { firebaseApp, firebaseUIApp } from './config/firebaseConfig'

require('bootstrap/dist/css/bootstrap.css')

firebaseApp.auth().onAuthStateChanged(user => store.commit('SET_USER', user))
store.commit('SET_FIREBASE_APP', firebaseApp)
store.commit('SET_FIREBASE_UI_APP', firebaseUIApp)

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app')
