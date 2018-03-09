<template>
	<nav class="navbar">
		<ul class="navbar__ul">
			<li class="navbar__li--logo">
				<img class="navbar__logo" src="../assets/aerolab-logo.svg" alt="">
			</li>
			<li>{{userData.name}}</li>
			<li>{{userData.points}} coins</li>
		</ul>
	</nav>
</template>

<script>
export default {

  name: 'navBar',

  data () {
    return {

    }
  },
  computed: {
  	userData () {
  		return this.$store.getters.userData
  	}
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
</style>