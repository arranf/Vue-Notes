<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus plus"></i>
    <i @click="toggleFavourite"
      class="glyphicon glyphicon-star"
      :class="[{starred: (isFavourite === undefined) ? false : isFavourite}, {star: isCurrentActiveAccessible}, {disabled: !isCurrentActiveAccessible}]"></i>
    <i @click="deleteNote"
    class="glyphicon glyphicon-remove"
    :class="[{remove: isCurrentActiveAccessible}, {disabled: !isCurrentActiveAccessible}]"></i>
  </div>
</template>

<script>
import {mapActions}  from 'vuex'

export default {
    methods: mapActions([
        'addNote', 'deleteNote', 'toggleFavourite', 'deleteNote'
    ]),
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

<style>
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

</style>
