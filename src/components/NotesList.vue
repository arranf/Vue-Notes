import {updateActiveNote} from '../vuex/actions'
<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleFavouriteView()"
            :class="{active: showAll}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="toggleFavouriteView()"
            :class="[{active: !showAll}]">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in notes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    methods:
        mapActions([
            'updateActiveNote', 'toggleFavouriteView'
        ]),
    computed: {
        ...mapGetters(['favouriteNotes']),
        notes() {
            if (this.showAll){
                return this.$store.state.notes
            }
            else {
                return this.favouriteNotes
            }
        },
        activeNote() {
            return this.$store.state.activeNote
        },
        showAll() {
            return !this.$store.state.displayingFavourites
        }
    }
}

</script>
