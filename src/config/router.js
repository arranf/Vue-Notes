/**
 * Created by arran on 29/01/17.
 */
import VueRouter from 'vue-router'

import store from '../vuex/store'

import App from '../components/App'
import Hello from '../components/Hello'
import Auth from '../components/Auth'


// redirect from accountchooser is losing hash and redirects to the root
// so I check query string if it exists
const checkFromAuth = (to, from, next) => {
  const query = window.location.search.substr(1).split('=')
  if (query[0] === 'mode') {
    next({
      path: '/auth',
      query: { mode: query[1] },
    })
  } else if (store.getters.user) {
    next('/app')
  }
  next('/auth')
}

const guard = (to, from, next) => {
  if (!store.getters.user){
    next('/')
  }
  next()
}

const checkIfAuthed = (to, from, next) => {
  if (store.getters.user){
    next('/app')
  }
  next()
}

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello, beforeEnter: checkFromAuth },
    { path: '/auth', component: Auth, beforeEnter: checkIfAuthed },
    { path: '/app', component: App, beforeEnter: guard }
  ],
})

export default router
