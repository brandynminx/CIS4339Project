<template>
    <v-container>
        <v-layout column>
          <h1>
                    <div v-if="userName() == null">
                        
                    </div>
                    <div v-else>
                        {{userName()}}
                    </div>
                    <div  class="container">
                    <div v-if="notes">
                        <Create @createNote="createNote"/>
                        <br>
                        <div v-if= "emailAuth()">
                        <list v-for="(note, index) in notes" :note="note" :key="index" @deleteNote="deleteNote" @updateNote="updateNote"/>
                        </div>
                    </div>
                    </div>
            </h1>

            <h1 class="title my-3">Selected Tour Dates</h1>
            <!--Create another section like this but calling different sections of the database (i.e. Location, Tourname, etc)-->      
            <v-simple-table 
                class="elevation-1 mytable"
                style="background-color: lightblue;">     
                <template v-slot: default> 
                    <thead>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Tour Dates
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, idx) in userTours"
                        class="subheading mb-2"
                        :key="idx"
                        >
                            <td>{{ item }}</td>
                        </tr>
                    </tbody>
            </template>
            </v-simple-table>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">Go To Available Tours</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
//import About  from './views/About.vue'
import Create  from '@/components/Create.vue'
//import {globalStore} from '../main.js'
import { getNotes }  from '../repository'
import List  from '@/components/List.vue'
import firebase from 'firebase'

export default {
    name: 'About',
    components: {
        List,
        Create},
    data(){
        return {
            notes: []
        }
    },
    computed: {
        userTours() {
          console.log("RECIPES: " + JSON.stringify(this.$store.state.userTours))
            return this.$store.state.userTours
        }
    },
    mounted() {
        this.getTours();
        getNotes()
            .then(data => 
            this.notes = data.notes)
            .catch((err =>alert(err)));
    },
    methods: {
        emailAuth(){
            //this.notes = getNotes()
            //var em = firebase.auth().currentUser.email;
            //console.log("ABOUT EMAILAUTH " + this.notes.email)
            //if(globalStore.userEmail == em){
                return true
            //} else{
            //    return false
            //}
         },
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
        getTours() {
            this.$store.dispatch('getUserTours');
        },
        userName(){
            var user = firebase.auth().currentUser;
            var name;
            //if the user is signed in
            if (user) {
                //if the user is signed in, check getter to see if null
                if(this.$store.state.usersName != null){
                    this.getUsersName();
                    //console.log("NAME: " + JSON.stringify(this.$store.state.usersName))
                    //return this.$store.state.usersName
                    //console.log("RETURNED: " + name)
                    //name = 'signed in'
                    //return name
                    
                    name = JSON.stringify(this.$store.state.usersName)
                    var arr = name.split("\"")
                    var endResult = arr[3]
                    
                    return endResult
                    
                }
                //if the user is signed in and getter is null
                else{
                    name = 'no name was given.'
                    return name
                } 
                
               //name = 'Signed in'
               //return name

            //if the user is not signed in           
            } else {
                return null
            }
        },
            getUsersName() {

            var user = firebase.auth().currentUser;
            if(user){
                this.$store.dispatch('getUserName');
            }
            else{
                console.log("User not signed in")
            }
        }
    
    }
};
</script>

<style scoped>
.mytable .v-table tbody tr:not(:last-child) {
    background-color:lightblue;
    font-size: 80px;
}
</style>
