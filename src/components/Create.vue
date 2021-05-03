<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Add Note
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <textarea v-model="email" class="textarea"  placeholder="enter content"></textarea>
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
          <button @click="create" class="button is-primary is-pulled-right">Post</button>
        </section>
      </div>
      <button @click="toggle" class="modal-close is-large" aria-label="close"></button>
    </div>
    <button @click="toggle" class="button is-primary is-pulled-right">Create Tour Request</button>
    <br>
  </div>
</template>

<script>
import { createNote }  from '../repository'
export default {
  name: 'Create',
  data(){
    return {
      title: '',
      body: '',
      location: '',
      costs: '',
      isActive: false
    }
  },
  methods: {
    create(){
      let data = { email: this.email, title: this.title, tourDesc: this.tourDesc, body: this.body, location: this.location, costs: this.costs }
      createNote(data)
        .then(data => {
          this.$emit('createNote', data.note, { useCredentails: true });
          this.title = this.tourDesc = this.body = this.location = this.costs= this.email = '';
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