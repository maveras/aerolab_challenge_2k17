<template>
	<div class="product" @mouseover="showRedeem = true && !insufficientFounds" @mouseleave="showRedeem = false">
    <div class="product__reddem" :class="{ 'product__reddem--show' : showRedeem }">
      <span class="product__reddem__price">
        {{userPoints}}
      </span>
      <span class="product__reddem__price">
        - {{cost}}
      </span>
      <span class="product__reddem__price product__reddem__price--total">
      {{total}}<coin class="coin-total-price" :rotating="true"></coin>

      </span>

      <div class="">
        <button class="btn" v-if="!userReddeming" @click="reddem(product)">REDDEM NOW</button>
      </div>
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
      this.showRedeem = false
    }
  },
  computed: {
    insufficientFounds () {
      return this.cost > this.$store.getters.userPoints
    },
    diffPrice () {
      let diffPrice = this.cost - this.$store.getters.userPoints
      return diffPrice
    },
    userPoints () {
      return this.$store.getters.userPoints
    },
    total () {
      let userPoint = this.userPoints
      let cost = this.cost

      let total = userPoint - cost
      return total
    },
    userReddeming () {
      return this.$store.getters.userReddeming
    }

  },
  watch: {
    userReddeming () {
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
    height: 270px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.16);

  }
  .product__reddem--show {
    transform: translateY(0px);
    opacity: 1;
  }
  .product__reddem__price {
    font-size: 1.5rem;
    font-weight: bold;
    display: inline;
    color: white;
    text-shadow: 1px 1px 1px grey;
    position: relative;
  }
  .product__reddem__price--absolute {
    position: absolute;
    top:10px;
  }
  .product__reddem__price--total {
    border-top: solid 3px white;
    padding: 6px;
  }
  .btn {
    width: 3rem;
  }
  .price__detail {
    display: inline-block;
  }
  .coin {
    display: inline-block;
  }
  .coin-total-price {
    position: relative;
    top: 10px;
    left: 0px;
  }

  .btn {
    display: inline;
    background: #808080;
    width: auto;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    padding: .6rem;
    font-size: 1rem;
    transition: all .2s ease;
  }
  .btn:hover {
    transform: scale(1.1);
  }

</style>