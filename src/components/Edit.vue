<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Update Tour Request
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input v-model="email" class="input" type="text" placeholder="email">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="title">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="tourDesc" class="textarea"  placeholder="enter content"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="body" class="textarea"  placeholder="enter content"></textarea>
            </div>
          </div>
            <div class="field">
            <div class="control">
              <textarea v-model="location" class="textarea"  placeholder="enter content"></textarea>
            </div>
          </div>
            <div class="field">
            <div class="control">
              <textarea v-model="costs" class="textarea"  placeholder="enter content"></textarea>
            </div>
          </div>
          <button @click="update" class="button is-primary is-pulled-right">Post</button>
        </section>
      </div>
      <button @click="toggle" class="modal-close is-large" aria-label="close"></button>
    </div>
    <button @click="toggle" class="button is-small is-pulled-right">Update</button>
  </div>
</template>

<script>
import { updateNote }  from '../repository'
export default {
  name: 'Edit',
  data(){
    return {
      email: this.note.email,
      title: this.note.title,
      tourDesc: this.note.tourDesc,
      body: this.note.body,
      location: this.note.location,
      costs: this.note.costs,
      isActive: false
    }
  },
  props: ['note'],
  methods: {
    update(){
      let data = { email: this.email, title: this.title, tourDesc: this.tourDesc, body: this.body, location: this.location, costs: this.costs }
      updateNote(data, this.note._id)
        .then(data => {
          this.$emit('updateNote', data.note);
          this.toggle();
        })
        .catch(err => alert(err.message));
    },
    toggle(){
      this.isActive = !this.isActive;
    },
  },
}
</script>
