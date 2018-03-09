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
      data: {},
      loading: false
    },
    products: {
      loadingProducts: false,
      products: []
    }
  },
  mutations: {
    SET_USER (state, apiData) {
      state.user.data = apiData
    },
    SET_PRODUCTS (state, apiProducts) {
      state.products.products = apiProducts
      state.apiLoaded = true
    },
    SET_LOADING_USER (state) {
      state.user.loading = true
    },
    FINISH_LOADING_USER (state) {
      state.user.loading = false
    },
    LOADING_PRODUCT_START (state) {
      state.products.loadingProducts = true
    },
    LOADING_PRODUCT_FINISHED (state) {
      state.products.loadingProducts = false
    }
  },
  actions: {
    login ({commit}) {
      commit('SET_LOADING_USER')
       console.log('entreee')
      axios.get('https://aerolab-challenge.now.sh/user/me')
      .then( res => {
        commit('SET_USER', res.data)
        commit('FINISH_LOADING_USER')
      })
      .catch( error => console.log(error))
    },
    getProducts ({commit}) {
      commit('LOADING_PRODUCT_START')
      axios.get('https://aerolab-challenge.now.sh/products')
      .then( res => {
        commit('SET_PRODUCTS', res.data)
        commit('LOADING_PRODUCT_FINISHED')
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
    },
    apiLoaded: state => {
      return state.user.data
    },
    products: state => {
      return state.products.products
    },
    userDataLoading : state => {
      return state.user.loading
    },
    productsLoading : state => {
      return state.products.productsLoading
    }
  }
})