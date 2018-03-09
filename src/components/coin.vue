<template>
    <div class="coin" :class="{rotate: rotating}">
      <img src="../assets/icons/coin.svg" alt="">
    </div>
</template>

<script>
export default {

  name: 'coin',

  data () {
    return {
    }
  },
  props: ["rotating"]
}
</script>

<style lang="css" scoped>
  .coin {
    display: flex;
    align-items: flex-end;
    transition: all 4s ease;
  }
  .rotate {
    transform: rotateY(500deg)
  }
</style>