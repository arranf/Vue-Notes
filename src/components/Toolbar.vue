<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus plus"></i>
    <i @click="toggleFavourite"
      class="glyphicon glyphicon-star"
      :class="[{starred: (isFavourite === undefined) ? false : isFavourite}, {star: isCurrentActiveAccessible}, {disabled: !isCurrentActiveAccessible}]"></i>
    <i @click="deleteNote"
    class="glyphicon glyphicon-remove"
    :class="[{remove: isCurrentActiveAccessible}, {disabled: !isCurrentActiveAccessible}]"></i>
    <i @click="signOut" class="glyphicon glyphicon-off signOut"></i>
  </div>
</template>

<script>
import {mapActions}  from 'vuex'
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
        isFavourite() {
            return (this.$store.state.activeNote == undefined) ? false :this.$store.state.activeNote.favourite
        },
        isCurrentActiveAccessible(){
            return (this.$store.state.activeNote !== undefined && ( (this.$store.state.displayingFavourites && this.$store.state.activeNote.favourite) || !this.$store.state.displayingFavourites ) && this.$store.state.notes.length > 0 )
        }
    }
}
</script>

<style scoped>
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
    color: #FBE7E7;
  }

</style>
