<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus plus"></i>
    <i @click="toggleFavourite"
      class="glyphicon glyphicon-star"
      :class="[{starred: isCurrentFavourite}, {star: isCurrentActiveAccessible}, {disabled: !isCurrentActiveAccessible}]" :disabled="isCurrentActiveAccessible ? false : true"></i>
    <i @click="deleteNote"
    class="glyphicon glyphicon-remove"
    :class="[{remove: isCurrentActiveAccessible}, {disabled: !isCurrentActiveAccessible}]" :disabled="isCurrentActiveAccessible ? false : true"></i>
    <i @click="signOut" class="glyphicon glyphicon-off signOut bottom"></i>
  </div>
</template>

<script>
import {mapActions, mapGetters}  from 'vuex'
import firebase from 'firebase'
import router from '../config/router'

export default {
    methods: {
      ...mapActions([
        'addNote', 'deleteNote', 'toggleFavourite', 'deleteNote, signOut'
      ]),
      signOut() {
        firebase.auth().signOut().then(this.onSignOut, this.onError);
      },
      onSignOut() {
        console.log('onSignOut');
        router.push({path: '/', query: {ref: 'signout'}})
      },
      onError() {
        console.error('onError');
      }
    },
    computed: {
      ...mapGetters(['isCurrentFavourite', 'isCurrentActiveAccessible'])
    }
}
</script>

<style scoped>

#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}

i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

i:hover:enabled {
  opacity: 1;
}

.plus:hover {
    color: #37AB76;
}

.star:hover {
    color: #F7AE4F;
}

.remove:hover {
    color: #F77C4F;
}


.starred {
  color: #F7AE4F;
}

.starred:hover {
    color: #767676;
}

.disabled {
    opacity: 0.5 !important;
}

.signOut:hover {
  color: #faf6fb;
}

  .bottom {
    position: absolute;
    top: auto;
    bottom: 0;
  }



</style>
