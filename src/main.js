import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

/* eslint-disable no-new */
new Vue({
  store,
  components: { App },
  el: '#app',
  template: '<App/>',
})
