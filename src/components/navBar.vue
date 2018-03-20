<template>
  <div>
      <nav class="navbar" :class="{'navbar--fixed': stickNavBar}">
        <ul class="navbar__ul">
          <div class="navbar__left">
            <li class="navbar__li--logo">
              <img class="navbar__logo" src="../assets/aerolab-logo.svg" alt="">
            </li>
          </div>
          <div class="navbar__right">
            <li>{{userData.name}}</li>
            <div class="user-coins-container">
                <li>{{userData.points}}</li>
                <li class="discount" :class="{'animate-discount': discountAnimation}">-{{uiDiscountPrice}}</li>
              <coin :rotating="userDataLoading || rotate"></coin>
              <div class="">
                <button class="btn--trans" @click="addAmount()"><i class="material-icons btn--trans">add</i></button>
              </div>
            </div>
          </div>
        </ul>
      </nav>
  </div>
</template>

<script>
import axios from 'axios'
import coin from './coin.vue'
export default {

  name: 'navBar',

  data () {
    return {
      animateDiscount: false,
      stickNavBar: false,
      rotate: false
    }
  },
  methods: {
    doDiscountAnimation () {
      let _this = this
      setTimeout (()=> {
        this.$store.commit('DISCOUNT_ANIMATION_OFF')
      },1500)
    },
    addAmount () {
      this.rotate = true
      let amountObj = {
        amount: 1000
      }
      axios.post('https://aerolab-challenge.now.sh/user/points', amountObj)
      .then( res => {
        this.$store.dispatch('login')
        this.rotate = false
      })

    },
    setScrollBar () {
      let navbar = document.querySelector('.navbar')
      let navarSize = navbar.offsetHeight
      window.addEventListener('scroll', evt => {
        if (window.pageYOffset > navarSize) {
          this.stickNavBar = true
        } else {
          this.stickNavBar = false
        }
      })
    }
  },
  computed: {
  	userData () {
  		return this.$store.getters.userData
  	},
    userDataLoading () {
      return this.$store.getters.userDataLoading
    },
    discountAnimation () {
      return this.$store.getters.uiDiscountAnimation
    },
    uiDiscountPrice () {
      return this.$store.getters.uiDiscountPrice
    }
  },
  watch: {
    discountAnimation (value1, value2) {
      // doDiscountAnimation ()
      //this.$store.commit('DISCOUNT_ANIMATION_OFF')
      this.doDiscountAnimation ()
    }

  },
  mounted () {
    this.setScrollBar()
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
    transform: all 3 ease;
	}
  .navbar--fixed {
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: white;
    top:0;
    left: 0;
  }
	.navbar__ul {
		height: 2rem;
		display: flex;
    justify-content: space-between;
    align-items: center;
	}
	.navbar__logo {
		height: 2rem;
	}
	.navbar__left {
    display: flex;
    align-items: center;
	}
  .navbar__right {
    display: flex;
    align-items: center;
  }
  .navbar__right__add {

  }
  .user-coins-container {
    display: flex;
    align-items: center;
    background-color: gray;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    padding-top: 3px;
    position: relative;
  }
  .discount {
    position: absolute;
    opacity: 0;
    bottom: 10px;
    color: red;
  }

  .btn {
    background: #F9CF47;
    border: 0;
    font-size: .5rem;
    margin-right: .2rem;
    border-radius: 12px;
    cursor: pointer;
    color: grey;
    outline: 0px;
    font-weight: bold;
    transition: all .2s ease
  }
  .btn--trans {
    background: transparent;
    border: none;
    padding-top: 1px;
    color: white;
    cursor: pointer;
    outline: 0px;
  }

  .animate-discount {
    animation: discountAnimation 2s ease;
  }

  @keyframes discountAnimation {
    from {
      opacity: 1;
    }
    to {
      bottom: 46px;
      opacity: 0;
    }
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