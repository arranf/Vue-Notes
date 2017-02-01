/**
 * Created by arran on 29/01/17.
 */
import VueRouter from 'vue-router'

import store from './vuex/store'
import App from './components/App'
import Auth from './components/Auth'
import {authUser} from './vuex/actions'

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Auth },
    { path: '/app', component: App, beforeEnter: (to, from, next) => {
      authUser(next('/')).then(() => {
        next()
      })
    }}
  ]
})

export default router
