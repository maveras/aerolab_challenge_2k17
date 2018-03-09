<template>
    <div class="coin">
      <img src="../assets/icons/coin.svg" alt="">
    </div>
</template>

<script>
export default {

  name: 'coin',

  data () {
    return {
      rotate: false
    }
  },
  methods: {
    rotateCoin () {
    }
  }
}
</script>

<style lang="css" scoped>
  .coin {
    display: flex;
    align-items: flex-end;
  }
</style>