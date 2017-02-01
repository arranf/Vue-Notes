<template>
  <div id="firebaseui-auth-wrapper" style="margin-top: 6em">
    <h1 style="text-align:center">Sign In</h1>
    <div id="firebaseui-auth-container">

    </div>
  </div>
</template>


<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui'

  const uiConfig = {
    signInSuccessUrl: '/#/app',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '/#/tos',
  }

  export default {
    name: 'auth',
    mounted() {
      this.ui = new firebaseui.auth.AuthUI(firebase.auth())
      firebase.auth().onAuthStateChanged(user => this.$store.commit('SET_USER', user))
      this.ui.start('#firebaseui-auth-container', uiConfig)
    },
    destroyed() {
      this.ui.reset()
    }
  }
</script>

<style src="firebaseui/dist/firebaseui.css">
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
</style>
