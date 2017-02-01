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
  import router from 'src/router'
  import { authUser } from 'src/vuex/actions'

  const uiConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '/tos',
    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl) {
        router.push('/app')
        return false
      }
    }

  }

  export default {
    name: 'auth',
    beforeMount () {
      this.ui = new firebaseui.auth.AuthUI(firebase.auth())
      authUser(this.ui.start('#firebaseui-auth-container', uiConfig))
    }
  }
</script>

<style src="firebaseui/dist/firebaseui.css">
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
</style>
