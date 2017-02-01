<template>
    <div id="note-editor">
      <textarea
        :value="activeNote.text"
        @input="updateNote"
        class="form-control">
      </textarea>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import debounce from 'lodash/debounce';

export default {
    methods: {
         ...mapActions(['editNote', 'addNote']),
      updateNote: debounce(function (event) {
        if (this.$store.state.notes.length === 0){
          this.addNote()
        }
        this.editNote(event)
      }, 150)
    },
    computed: {
        activeNote() {
            return (this.$store.state.activeNote == undefined) ?  {text: 'Why not start typing?'} : this.$store.state.activeNote
        },
        isActiveNote(){
            return !(this.$store.state.activeNote == undefined)
        }
    }
}
</script>
