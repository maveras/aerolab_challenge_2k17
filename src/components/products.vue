<template>
  <div>
    <div class="products-header">
      <div class="product-name">
        {{title}}
      </div>
    </div>
    <div class="sort-bar">
      <button class="btn" @click="sortProducts('lth')">
        low to high
      </button>
      <button class="btn" @click="sortProducts('htl')">
        high to low
      </button>
    </div>
    <div class="product-list" v-if="!productsLoading">
      <product v-for="product in products"
               :product="product"
               :price="product._id"
               :category="product.category"
               :cost="product.cost"
               :img="product.img"
               :name="product.name"> </product>
    </div>
    <div v-if="productsLoading" >LOADING PRODUCTS...... <coin :rotating="!productsLoading"></coin></div>
  </div>
</template>

<script>
import product from './product.vue'
import coin from './coin.vue'

export default {
  name: 'products',
  data () {
    return {
      title: 'ELECTRONICS',
      productLoaded: false
    }
  },
  methods: {
    sortProducts (type) {
      this.$store.commit('SORT_BY', type)
    }
  },
  computed: {
    products () {
      return this.$store.getters.products
    },
    productsLoading () {
      return this.$store.getters.productsLoading
    }
  },
  components: {
    product,
    coin
  }
}
</script>

<style lang="css" scoped>
  .products-header {
    min-height: 200px;
    background-image: url("../assets/header-x1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .product-name {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  .product-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: auto;
  }

  .btn {
    background: white;
    border: 0;
    padding: 1rem;
    cursor: pointer;
    background-color: #808080;
    color: white;
    border-radius: 15px;
    margin: .2rem;
    box-shadow: 1px 2px 5px 2px #ccc;
    outline: 0px;
    font-size: .8rem;
    font-weight: bold;
    transition: all .2s ease
  }

  .btn:active {
    box-shadow: 0px 0px 0px 0px #ccc;

  }
  .sort-bar {
    display: flex;
    box-shadow: 3px 3px 5px 2px #ccc;
    height: 3rem;
    padding:.2rem;
  }
</style>