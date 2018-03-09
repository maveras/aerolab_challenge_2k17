<template>
  <div id="app">
    <nav-bar></nav-bar>
    <products></products>
  </div>
</template>
<script>
import navBar from './components/navBar.vue'
import products from './components/products.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$store.dispatch('login')
    this.$store.dispatch('getProducts')
  },
  computed: {
    apiLoaded () {
      return this.$store.state.apiLoaded
    }
  },
  components: {
    navBar,
    products
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 10px;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
