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
      data: {
        points: 0,
        name: ''
      },
      selectedProducts: [],
      loading: false,
      reddeming: false
    },
    products: {
      loadingProducts: false,
      products: []
    },
    ui: {
      discountAnimation: false,
      discountPrice: 0
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
    },
    REDDEM (state, product) {
      state.user.data.points = state.user.data.points - product.cost
    },
    ADD_PRODUCT (state, product) {
      state.user.selectedProducts.push(product)
    },
    SET_DISCOUNT_PRICE (state, price) {
      state.ui.discountPrice = price
    },
    DISCOUNT_ANIMATION_ON (state) {
      state.ui.discountAnimation = true
    },
    DISCOUNT_ANIMATION_OFF (state) {
      state.ui.discountAnimation = false
    },
    REDDEMING (state) {
      state.user.reddeming = !state.user.reddeming
    },
    SET_POINTS (state, points) {
      state.user.data.points =+ points
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
    },
    reddemProduct ({commit, dispatch}, product) {
      commit('REDDEMING')
      let reedemProduct = {
        productId: product._id
      }
      axios.post('https://aerolab-challenge.now.sh/redeem', reedemProduct)
      .then( res => {
        commit('REDDEM', product)
        commit('SET_DISCOUNT_PRICE', product.cost)
        commit('DISCOUNT_ANIMATION_ON')
        commit('REDDEMING')
        // dispatch('reddemProduct', product)
        dispatch('addProductToCart', product)
      })
      .catch( error => console.log(error))
    },
    addProductToCart ({commit}, product) {
      commit('ADD_PRODUCT', product)
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
    },
    userName: state => {
      return state.user.data.name
    },
    userPoints: state => {
      return state.user.data.points
    },
    uiDiscountAnimation: state => {
      return state.ui.discountAnimation
    },
    uiDiscountPrice: state => {
      return state.ui.discountPrice
    },
    userReddeming: state => {
      return state.user.reddeming
    }
  }
})