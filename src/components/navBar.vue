<template>
	<nav class="navbar">
		<ul class="navbar__ul">
			<li class="navbar__li--logo">
				<img class="navbar__logo" src="../assets/aerolab-logo.svg" alt="">
			</li>
			<li>{{userData.name}}</li>
      <div class="user-coins-container">
        <transition name="slide-fade">
          <li>{{userData.points}}</li>
        </transition>
        <coin :rotating="userDataLoading"></coin>
      </div>
		</ul>
	</nav>
</template>

<script>
import coin from './coin.vue'
export default {

  name: 'navBar',

  data () {
    return {
    }
  },
  computed: {
  	userData () {
  		return this.$store.getters.userData
  	},
    userDataLoading () {
      return this.$store.getters.userDataLoading
    }
  },
  components: {
    coin
  }
}
</script>

<style lang="css" scoped>
	.navbar {
		box-shadow: 3px 3px 5px 2px #ccc;
		margin: 0;
	}
	.navbar__ul {
		height: 2rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.navbar__logo {
		height: 2rem;
		margin-right: auto;
	}
	.navbar__li--logo {
		align-self: flex-start;
	}
  .user-coins-container {
    display: flex;
    align-items: center
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>