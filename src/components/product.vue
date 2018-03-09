<template>
	<div class="product">
    <div class="product__img">
      <img :src="img.url" alt="">
      <div class="product__price">
        <span class="price__detail">{{cost}}</span>
        <coin class="coin"></coin>
      </div>
    </div>
    <div class="product__detail">
      <div class="product__name">{{name}}</div>
      <div class="product__category">{{category}}</div>
    </div>
	</div>
</template>

<script>
import coin from './coin.vue'
export default {

  name: 'product',
  props: [
    '_id',
    'category',
    'cost',
    'img',
    'name'
  ],

  data () {
    return {

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
  .price__detail {
  }

</style>