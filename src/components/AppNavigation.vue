<template>
    <span>
        <my-component v-if="renderComponent"/>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" :to="item.url">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="black" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
                        <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/menu"
                data-cy="menuBtn"
                >Available Tours</v-btn
            >
                <v-spacer></v-spacer>
            <router-link to="/">
            <b class="title" style="color: dodgerblue">
                <v-toolbar-title  data-cy="titleBtn">
                    <div v-if="userName() == null">
                        {{appTitle}}
                    </div>
                    <div v-else>
                        Welcome back, {{userName()}}
                    </div>
                </v-toolbar-title>
            </b>
            </router-link>

            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
                <v-btn
                    color="brown lighten-3"
                    to="/help"
                    class="nav-help"
                    data-cy="helpBtn"
                    >HELP</v-btn
                >
                <v-btn
                    color="brown lighten-3"
                    to="/join"
                    class="nav-join"
                    data-cy="joinBtn"
                    >JOIN</v-btn
                >
            </div>
            <div v-else>
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn flat to="/show">Show List</v-btn>
                <v-btn outline color="black" @click="logout" data-cy="logout"
                    >Logout</v-btn
                >
            </div>
        </v-toolbar>
    </span>
</template>


<script>
import firebase from 'firebase'

export default {
    name: 'AppNavigation',
    state: {
      user: null,
    },
    data() {
        return {
            appTitle: 'Welcome to Deep Sea Submarine Tours  ',
            drawer: false,
            items: [
                { title: 'Menu', url: '/menu' },
                { title: 'Profile', url: '/about' },
                { title: 'Sign In', url: '/sign-in' },
                { title: 'Join', url: '/join' },
                { title: 'Create', url: '/create' },
                { title: 'Edit', url: '/edit' }
            ],
            renderComponent: true,
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        forceRerender(){
            this.renderComponent = false;

            this.$nextTick(() =>{
                this.renderComponent = true;
            });
        },
        logout() {
            this.renderComponent = false;
            this.$nextTick(() =>{
                this.renderComponent = true;
            });
            this.$store.dispatch('userSignOut');
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
                    var fnArr = endResult.split(" ")
                    var firstName = fnArr[0]
                    //console.log("MY ARRAY: " + firstName)
                    return firstName
                    
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
    },
      
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

.title {
    font-style: oblique;
    text-align: center;
}

</style>