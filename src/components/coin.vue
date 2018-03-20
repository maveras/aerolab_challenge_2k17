<template>
    <div class="coin" :class="{rotate: rotating}">
      <img src="../assets/icons/coin.png" alt="">
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
    transition: rotate 1s ease
  }
  .rotate {
    animation: rotating 0.8s linear infinite;
  }
  @keyframes rotating {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
</style>