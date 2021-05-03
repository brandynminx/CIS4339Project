  
<template>
            <div  class="container">
      <div v-if="notes">
        <Create @createNote="createNote"/>
        <br>
        <div>
          <list v-for="(note, index) in notes" :note="note" :key="index" @deleteNote="deleteNote" @updateNote="updateNote"/>
        </div>
      </div>
    </div>

</template>

<script>
//import About  from './views/About.vue'
import Create  from '@/components/Create.vue'
import { getNotes }  from '../repository'
import List  from '@/components/List.vue'
export default {
    name: 'Show',
    components: {
        List,
        Create},
  data(){
    return {
      notes: []
    }
  },
  methods: {
    deleteNote(id){
      let notes = this.notes.filter(note => note._id != id)
      this.notes = notes;
    },
    updateNote(note){
      this.deleteNote(note._id);
      this.createNote(note);
    },
    createNote(note){
        this.notes = [note, ...this.notes];
    },
  },
  mounted(){
     getNotes()
      .then(data => this.notes = data.notes)
      .catch((err =>alert(err)));
  }
}
</script>

<style></style>