<template>
	<div class="product" @mouseover="showRedeem = true && !insufficientFounds" @mouseleave="showRedeem = false">
    <div class="product__reddem" :class="{ 'product__reddem--show' : showRedeem }">
      <span class="product__reddem__price">
        {{cost}}
      </span>
      <button class="btn" @click="reddem(product)">Reedem NOW</button>
    </div>
    <div class="product__img">
      <img :src="img.url" alt="">
      <div v-if="insufficientFounds"class="product__price product__price--insfucc">
        <span class="price__detail">you need {{diffPrice}}</span>
        <coin class="coin"></coin>
      </div>
      <div v-else class="product__price">
        <template v-if="!showRedeem">
          <span class="price__detail">{{cost}}</span>
          <coin class="coin"></coin>
        </template>
      </div>
    </div>
    <div class="product__detail">
      <div class="product__name">{{name}}</div>
      <div class="product__category">{{category}} </div>
      <div class=""><button @click="reddem(product)">buyy</button></div>
    </div>
	</div>
</template>

<script>
import coin from './coin.vue'
export default {

  name: 'product',
  props: [
    'product',
    '_id',
    'category',
    'cost',
    'img',
    'name'
  ],
  data () {
    return {
      showRedeem: false
    }
  },
  methods: {
    reddem (product) {
      this.$store.dispatch('reddemProduct', product)
      this.$store.dispatch('addProductToCart', product)
    }
  },
  computed: {
    insufficientFounds () {
      return this.cost >= this.$store.getters.userPoints
    },
    diffPrice () {
      let diffPrice = this.cost - this.$store.getters.userPoints
      return diffPrice
    }
  },
  components: {
    coin
  }
}
</script>

<style lang="css" scoped>
  .product {
    padding: 1rem;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.16);
    position: relative;
  }
  .product__detail {
    padding: .3rem
  }
  .product__category {
    font-size: .8rem
  }
  .product__price {
    position: absolute;
    top: 10px;
    right:10px;
    background-color: #60D9FB;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding-left:.4rem;
    padding-top:2px;
  }

  .product__price--insfucc {
    background-color: rgba(128,128,128,.8);
    color: white;
    padding:0.1rem .2rem 0 .7rem;

  }
  .product__reddem {
    background-color: rgba(96,217,251, 0.8);
    height: 290px;
    width: 285px;
    position: absolute;
    top:0;
    left: 0;
    margin: 0;
    padding: 0;
    transform: translateY(50px);
    opacity: 0;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .product__reddem--show {
    transform: translateY(0px);
    opacity: 1;
  }
  .product__reddem__price {

  }
  .btn {
    width: 3rem;
  }

</style>