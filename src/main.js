import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './vuex/store'
import router from './router'

require('bootstrap/dist/css/bootstrap.css')

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app')
