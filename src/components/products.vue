<template>
  <div>
    <div class="products-header">
      <div class="product-name">
        {{title}}
      </div>
    </div>
    <div class="product-list" v-if="!productsLoading">
      <product v-for="product in products"
               :price="product._id"
               :category="product.category"
               :cost="product.cost"
               :img="product.img"
               :name="product.name"> </product>
    </div>
    <div v-else >LOADING PRODUCTS...... <coin :rotating="!productsLoading"></coin></div>
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
</style>