<template>

  <article class="message">
    <div v-if="note.email == emailAuth()" class="message-header">
      <p>{{ note.title }}</p>
      <button @click="deleteNote" class="delete" aria-label="delete">Delete</button>
    </div>
    <div v-if="note.email == emailAuth()" class="message-body">
      {{ note.email }}
      <p></p>
      {{ note.tourDesc }}
      <p></p>
      {{ note.body }}
      <p></p>
      {{ note.location }}
      <p></p>
      {{ note.costs }}
      <br>
      <Edit :note="note" @updateNote="updateNote" :key="note._id"/>
    </div>
  </article>
</template>

<script>
  import { deleteNote } from '../repository'
  import Edit from './Edit'
  import Moment from 'moment'
  import firebase from 'firebase';
  import {globalStore} from '../main.js'

  export default {
    name: 'List',
    props: [ 'note' ],
    components: { Edit },
    methods: {
      emailAuth(email){
        globalStore.userEmail = email
        console.log(globalStore.userEmail)
        var user = firebase.auth().currentUser.email;
        if(this.note.email == user){
          console.log("emailAuth " + this.note.email)
          return this.note.email
        }
        else{
          return null
        }                
      },
      deleteNote(e){
        e.preventDefault();
        deleteNote(this.note._id)
          .then(() => this.$emit('deleteNote', this.note._id))
          .catch(err => alert(err))
      },
      updateNote(note){
        this.$emit('updateNote', note)
      }
    },
    filters: {
      moment(date) {
        return Moment(date).format('MMMM Do YYYY, h:mm:ss a');
      }
    }
  }
</script>