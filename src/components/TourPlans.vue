<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in tours" :key="idx">
                    <!--Recipe image
                    <v-responsive>
                        <v-img :src="item.recipe.image"></v-img>
                    </v-responsive>
                    -->
    <!--TEST-->
    <button v-on:click="getJSONData"
    type="button" class="v-btn v-btn--contained theme--light v-size--default"
    style="color: grey; padding-bottom: 10px; border: 1px solid black; height: 70px; font-size: 20px">
    View Available Tour Times</button>
    <!--TEST END-->
                    <div v-for="weatherData in weatherDataList" :key="weatherData.id" class="weather-data">
                        <v-card
                        >
                        <div v-if = "getShipwreck()"> 
                            <div v-if = "weatherData.tourName == 'Shipwrecks'">
                            <v-row align="start">
                            <v-card-text>
                            <v-col>
                            <div class="title my-5">{{ weatherData.tourDesc }}</div>
                            <div class="title my-5">{{ weatherData.location }}</div>
                            <div class="title my-5">{{ weatherData.time }}</div>
                            <div class="title my-5">{{ weatherData.costs }}</div>
                            </v-col>
                                <v-img :src="weatherData.img"></v-img>
                            </v-card-text>
                            </v-row>
                            <v-card-actions>
                            <v-btn color="grey" dark @click="addTour(weatherData)"
                            >Select this Tour</v-btn
                            >
                            <v-btn color="grey" dark @click="create(weatherData)"
                            >Select this Tour (MONGODB)</v-btn
                            >
                            </v-card-actions> 
                            </div>
                        </div>
                        <div v-else-if = "getTrench()">
                            <div v-if = "weatherData.tourName == 'Mariana Trench'"> 
                            <v-row align="start">
                            <v-card-text>
                            <v-col>
                            <div class="title my-5">{{ weatherData.tourDesc }}</div>
                            <div class="title my-5">{{ weatherData.location }}</div>
                            <div class="title my-5">{{ weatherData.time }}</div>
                            <div class="title my-5">{{ weatherData.costs }}</div>
                            </v-col>
                                <v-img :src="weatherData.img"></v-img>
                            </v-card-text>
                            </v-row>
                            <v-card-actions>
                            <v-btn color="grey" dark @click="addTour(weatherData)"
                            >Select this Tour</v-btn
                            >
                            <v-btn color="grey" dark @click="create(weatherData)"
                            >Select this Tour (MONGODB)</v-btn
                            >
                            </v-card-actions>
                            </div>
                        </div>
                        <div v-else-if = "getArctic()">
                            <div v-if = "weatherData.tourName == 'Arctic Shelf'">
                            <v-row align="start">
                            <v-card-text>
                            <v-col>
                            <div class="title my-5">{{ weatherData.tourDesc }}</div>
                            <div class="title my-5">{{ weatherData.location }}</div>
                            <div class="title my-5">{{ weatherData.time }}</div>
                            <div class="title my-5">{{ weatherData.costs }}</div>
                            </v-col>
                                <v-img :src="weatherData.img"></v-img>
                            </v-card-text>
                            </v-row>
                            <v-card-actions>
                            <v-btn color="grey" dark @click="addTour(weatherData)"
                            >Select this Tour</v-btn
                            >
                            <v-btn color="grey" dark @click="create(weatherData)"
                            >Select this Tour (MONGODB)</v-btn
                            >
                            </v-card-actions>
                            </div>
                        </div>                       
                    </v-card>
                    </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase';
import {globalStore} from '../main.js'
import { createNote }  from '../repository'

export default {
    state:{
        user: null,
    },
    name: 'TourPlans',
    data() {
    return {
        weatherDataList: [],
        email: '',
        title: '',
        tourDesc: '',
        body: '',
        location: '',
        costs: '',
        isActive: false
    };
    },
    props: ['note'],
    computed: {
        tours() {
            return this.$store.state.tours;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
       getShipwreck(){
           console.log(globalStore.title)
            if(globalStore.title == 'keto'){
                return true
            }
            else{
                return false
            }
       },
       getTrench(){
            console.log(globalStore.title)
            if(globalStore.title == 'paleo'){
                return true
            }
            else{
                return false
            }
       },
       getArctic(){
            if(globalStore.title == 'vegan'){
                return true
            }
            else{
                return false
            }
       },
       addTour(weatherData) {
            if (this.isAuthenticated) {
                var user = firebase.auth().currentUser;                
                console.log("TOUR " + weatherData.location )
                var str = (weatherData.tourName + " tour at " + weatherData.location + " on " + weatherData.time + " for " + weatherData.costs)
                firebase
                .database()
                .ref('users')
                .child(user.uid + '/recipes/')
                .push(str)
                //.push(weatherData.location)
            } else {
                this.$router.push('/sign-in');
            }
      },
      //ADD IN MONGODB DATABASE PUSH HERE

        create(weatherData){
            var em = firebase.auth().currentUser.email;
            let data = { email: em, title: weatherData.tourName, tourDesc: weatherData.tourDesc, body: weatherData.time, location: weatherData.location, costs: weatherData.costs }
            console.log("TourPlans Create Runs ")
            createNote(data)
                .then(data => {
                this.$emit('createNote', data.note, { useCredentails: true });
                this.title = this.tourDesc= this.body = this.location = this.cost = this.email = '';
                this.toggle();
                })
            .catch(err => alert(err.message));
        },
        toggle(){
            this.isActive = !this.isActive;
        },
        orderTours(item) {
            if (this.isAuthenticated) {
                this.$store.dispatch('addTours', item);
            } else {
                this.$router.push('/sign-in');
            }
        },
        getJSONData(){
            axios
            .get('../data.json')
            .then(response=> {
                this.weatherDataList = response.data
            })
            .catch((e) => {
                console.error(e)
            })
        }
    }
};
</script>

<style scoped></style>