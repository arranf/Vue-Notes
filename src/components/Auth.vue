<template>
  <div id="firebaseui-auth-wrapper" style="margin-top: 6em">
    <h1 style="text-align:center">Sign In</h1>
    <div id="firebaseui-auth-container">

    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  import firebase from 'firebase'
  const uiConfig = {
    signInSuccessUrl: '/#/app',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '/#tos',
  };
  export default {
    name: 'auth',
    computed: {
      ...mapGetters({
        firebaseUIApp: 'firebaseUIApp',
      }),
    },
    mounted() {
      this.firebaseUIApp.start('#firebaseui-auth-container', uiConfig)
    },
    destroyed() {
      this.firebaseUIApp.reset()
    },
  }
</script>

<style src="firebaseui/dist/firebaseui.css">
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
</style>
