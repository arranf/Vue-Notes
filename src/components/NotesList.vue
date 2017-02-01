<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleFavouriteView()"
            :class="{active: !displayingFavourites}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleFavouriteView()"
            :class="[{active: displayingFavourites}]">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <button v-for="note in notes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            <i v-if="note.favourite" class="glyphicon glyphicon-star star"></i>
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { getRef } from 'src/firebase/firebase-config'

export default {
    methods:
        mapActions([
            'updateActiveNote', 'toggleFavouriteView'
        ]),
    computed: {
        ...mapGetters(['favouriteNotes', 'activeNote', 'userId', 'displayingFavourites', 'notes'])
    },
    created() {
      if (this.userId) {
        this.$bindAsArray('notes', getRef('users/' + this.userId + '/notes'))
      }
    }

}
</script>

<style scoped>
  .star {
    color: #F7AE4F;
  }
</style>
