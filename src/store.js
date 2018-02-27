import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTY4ODliZTZmNDdlYTAwN2UwNDI0MzQiLCJpYXQiOjE1MTY4MDA0NDZ9.zQf_Io96UV9dEaauCR8-sGsN-OZIYsb3o8j8ydow07E'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    apiLoaded: false,
    user: {
      logged: false,
      data: {}
    },
    products: []
  },
  mutations: {
    SET_USER (state, apiData) {
      state.user.data = apiData
    },
    SET_PRODUCTS (state, apiProducts) {
      state.products = apiProducts
    }
  },
  actions: {
    login ({commit}) {
      axios.get('https://aerolab-challenge.now.sh/user/me')
      .then( res => {
        commit('SET_USER', res.data)
      })
      .catch( error => console.log(error))
    },
    getProducts ({commit}) {
      axios.get('https://aerolab-challenge.now.sh/products')
      .then( res => {
        commit('SET_PRODUCTS', res.data)
      })
      .catch( error => console.log(error))
    }
  },
  getters: {
    logged: state => {
      return state.user.logged
    },
    userData: state => {
      return state.user.data
    }
  }
})