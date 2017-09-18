import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJajRc0_ESZeyfW3tTHSiszjrdrpDK4Ns',
      authDomain: 'devmeetup-52756.firebaseapp.com',
      databaseURL: 'https://devmeetup-52756.firebaseio.com',
      projectId: 'devmeetup-52756',
      storageBucket: 'devmeetup-52756.appspot.com'
    })
  }
})
