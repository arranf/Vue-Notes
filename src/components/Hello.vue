<template>
  <div class="hello">
    <pre>current user: {{user}}</pre>

    <h1>Links
      <ul>
        <router-link to="/auth">Go to auth</router-link>
        <button v-if="user" @click="signOut">Sign out</button>
      </ul>
    </h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import firebase from 'firebase'

  export default {
    name: 'hello',
    computed: {
      ...mapGetters({
        user: 'user',
      }),
    },
    methods: {
      signOut() {
        firebase.auth().signOut().then(this.onSignOut, this.onError);
      },
      onSignOut() {
        console.log('onSignOut');
      },
      onError() {
        console.error('onError');
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
