
import '@babel/polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@/firebase/';

Vue.config.productionTip = false;

export const globalStore = new Vue({
  data: {
    title: 'null',
    userEmail: 'null'
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
