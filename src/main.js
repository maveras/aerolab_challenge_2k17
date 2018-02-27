import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

axios.defaults.headers.common['Autorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTY4ODliZTZmNDdlYTAwN2UwNDI0MzQiLCJpYXQiOjE1MTY4MDA0NDZ9.zQf_Io96UV9dEaauCR8-sGsN-OZIYsb3o8j8ydow07E'


new Vue({
  el: '#app',
  render: h => h(App),
  store
})
