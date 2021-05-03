import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase';
import router from '@/router';
import mongoose from 'mongoose'
import {globalStore} from '../main.js'
import config from '../config/DB';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      //recipes: [],
      tours: [],
      apiUrl: 'https://api.edamam.com/search',
      tourUrl: '../data.json',
      user: null,
      isAuthenticated: false,
      userTours: [],
      usersName: [],
  },
  mutations: {
      /*setRecipes(state, payload) {
          state.recipes = payload;
      },
      */
      setTours(state, payload){
            state.tours = payload;
      },
      setUser(state, payload) {
          state.user = payload;
      },
      setIsAuthenticated(state, payload) {
          state.isAuthenticated = payload;
      },
      setUserTours(state, payload) {
          state.userTours = payload;
      },
      setUserName(state, payload) {
        //console.log("READ")
          state.usersName = payload;
      },
      setDisplayName(state, payload){
        state.displayName = payload;
      }
  },
  actions: {
      async getTours({ state, commit }, plan) {
          try {
              globalStore.title = plan
              let response = await axios.get(`${state.apiUrl}`, {
                  params: {
                      q: plan,
                      app_id: '5b6623d5',
                      app_key: '46674aa2193dbb7b88ffd897331e661a',
                      from: 0,
                      to: 1
                  }
              });
              // sbdinc keys
              // let response = await axios.get(`${state.apiUrl}`, {
              //     params: {
              //         q: plan,
              //         app_id: '903de977',
              //         app_key: '1b5fbf78de2db637b392f141c524222c\t',
              //         from: 0,
              //         to: 9
              //     }
              // });
              console.log(response.data.hits)
              commit('setTours', response.data.hits);
          } catch (error) {
              commit('setTours', []);
          }
      },
      /*
      async getTours({state, commit}){
          //console.log("RUNS GETTOURS")
          try{
            let answer = await axios.get(`${state.tourUrl}`);
            console.log(answer.data)
            //let str = 'joan'
            commit('setTours', answer.data);
            //.then(res => console.log(res.data))
          } catch (error) {
            console.log(error) 
            commit('setTours', []);
          }       
      },
      */
      userLogin({ commit }, { email, password }) {
          firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(user => {
                  commit('setUser', user);
                  commit('setIsAuthenticated', true);
                  router.push('/about');
              })
              .catch(() => {
                  commit('setUser', null);
                  commit('setIsAuthenticated', false);
                  router.push('/');
              });
      },
      userJoin({ commit }, { email, password, displayName }) {
          firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user => {
                  commit('setUser', user);
                  console.log("SET USER")
                  commit('setIsAuthenticated', true);
                  console.log("IS AUTHENTICATED")
                  console.log(displayName)
                  //code to add username to current user
                  var nameRef = firebase.database().ref("users/" + user.user.uid).child('/username/')
                  nameRef.set({
                    username: displayName
                  })
                  //This can be changed to redirect to home page
                  router.push('/sign-in');
              })
              .catch(() => {
                  commit('setUser', null);
                  commit('setIsAuthenticated', false);
                  alert("The email you entered is already being used on this website. Please use a different email, or use the Sign In page to login.")
                  router.push('/join');
              })
      },
      userSignOut({ commit }) {
          firebase
              .auth()
              .signOut()
              .then(() => {
                  commit('setUser', null);
                  commit('setIsAuthenticated', false);
                  router.push('/');
              })
              .catch(() => {
                  commit('setUser', null);
                  commit('setIsAuthenticated', false);
                  router.push('/');
              });
      },
      addTours({ state }, payload) {
          console.log("PAYLOAD " + payload)
          firebase
              .database()
              .ref('users')
              .child(state.user.user.uid + '/recipes/')
              .push(payload.tours.label);
      },
      addMongoDB(weatherData) {
        mongoose.Promise = global.Promise;
        mongoose.connect(config.DB).then(
            () => {
                console.log('Database is connected') 
                (weatherData.tourName).save()
                .then(weatherData => {
                    console.log(weatherData)
                    router.push('/');
                })
                .catch(err => {   
                    console.log(err)
                    router.push('/');             
            });
            });

      },
      getUserTours({ state, commit }) {
          return firebase
              .database()
              .ref('users/' + state.user.user.uid + '/recipes/')
              .once('value', snapshot => {
                  console.log(snapshot.val())
                  commit('setUserTours', snapshot.val());
              });
      },
      getUserName({ state, commit }) {
        //console.log("THIS GETS READ")
        return firebase
        .database()
        .ref('users/' + state.user.user.uid + '/username/')
        .once('value', snapshot => {
            //console.log("USERNAME: " + snapshot.val())
            commit('setUserName', snapshot.val());
        });
    }
  },
  
  getters: {
      isAuthenticated(state) {
          return state.user !== null && state.user !== undefined;
      }
  }
});
