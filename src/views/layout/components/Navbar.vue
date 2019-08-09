<template>
  <!-- <div class="app-nav fixed" :class="{fixed: searchBarFixed}" ref="fixed"> -->
  <div class="app-nav fixed" ref="fixed">
    <div class="container">
      <div class="logo" @click="scrollTo('home-main')">
        <router-link to="/home" style="-webkit-tap-highlight-color: rgba(0,0,0,0);">
        <img src="../../../assets/comodin/logo.png" alt="CAPEAST" class="top_logo_img" onclick="return false">
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" style="display:none;" @click="fun_phoneMenuManager">
        <span class="hamburger" v-bind:class="{ lalrYK: islalrYK}"></span>
      </button>
      <div class="menu">
        <el-menu  class="el-menu-demo" mode="horizontal" text-color="#7f7d7e" active-text-color="#7f7d7e">
          <el-menu-item index="/services" @click="scrollTo('container-home')">Home</el-menu-item>
          <el-menu-item index="/services" @click="scrollTo('container-porject')">Features</el-menu-item>
          <el-menu-item index="/about"  @click="scrollTo('container-homeabout')">Mobile Product</el-menu-item>
          <el-menu-item index="/about"  @click="scrollTo('container-pricing')">Functionality</el-menu-item>
          <el-menu-item index="/about"  @click="scrollTo('container-inputcontact')">Contact</el-menu-item>
        </el-menu>
      </div>

      <nav class="collapse navbar-collapse" v-bind:class="{ in: islalrYK}">
        <ul class="navbar-nav navbar-left r-navbar__nav r-navbar__main" style="margin-left:auto">
          <a class="StyledNav__StyledNavLink-whtgmn-0 hVSFNe" @click="scrollTo('container-home')">Home</a>
          <a class="StyledNav__StyledNavLink-whtgmn-0 hVSFNe" @click="scrollTo('container-porject')">Features</a>
          <a class="StyledNav__StyledNavLink-whtgmn-0 hVSFNe" @click="scrollTo('container-homeabout')">Mobile Product</a>
          <a class="StyledNav__StyledNavLink-whtgmn-0 hVSFNe" @click="scrollTo('container-pricing')">Functionality</a>
          <a class="StyledNav__StyledNavLink-whtgmn-0 hVSFNe" @click="scrollTo('container-inputcontact')">Contact</a>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// import LangSelect from '@/components/LangSelect'
import '@/styles/iphoneStyl.scss'
export default {
  props: [
    'searchBarFixed',
    'scrollTop'
  ],
  data () {
    return {
      HasLogged: false,
      islalrYK: false,
      // searchBarFixed: false,
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    scrollTo (el) {
      this.islalrYK = false
      this.$router.replace({name: 'Home'})
      if (document.getElementsByClassName(el)[0] === undefined) {
        setTimeout(() => {
          window.scrollTo(0, document.getElementsByClassName(el)[0].offsetTop - 64)
        }, 1000)
      } else {
        window.scrollTo(0, document.getElementsByClassName(el)[0].offsetTop - 64)
      }
    },
    func_openSimpleDemand() {
      this.$parent.func_simpleDemandManager()
    },
    fun_phoneMenuManager() {
      if (this.islalrYK === false) {
        this.islalrYK = true
      } else {
        this.islalrYK = false
      }
    },
    fun_router_PhoneDemand() {
      this.islalrYK = false
      this.$router.replace({name: 'phoneSimpleDemand'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo{
    width: 128px;
    padding-top: 12px;
    margin-left: 9%;
  }
  .menu{
    margin-right: 8%;
  }
  .top_logo_img{
    width: 100%;
    height:auto;
  }
  .navbar-collapse{
    display: none;
  }
  // .el-menu--horizontal>.el-submenu .el-submenu__title,
  .el-menu-item{
    font-weight: 600 ;
    color: rgb(83, 98, 124);
    border: 0;
    user-select: none;
  }
  .fixed{
    position: fixed;
    width: 100%;
    z-index: 9;
  }
.app-nav{
  font-family: CenturyGothic;
  background-color: #fff;
  margin: 0 auto;
  // box-shadow: 0px 0px 5px #bbbaba;
  // max-width: 1200px;
  .container{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // width: 100%; //设计要求左右不满屏
    width: 1200px;
  }
  .el-menu-demo{
    border: 0;
    .get{
      height: 40px;
      margin: 10px ;
      // background-color: #fff;
      background-color: #fffd54;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .get:hover,
    .get:active,
    .get:focus{
      color: #409EFF;
      // background-color: #409EFF;
      background-color: #fffd54;
    }
    .get:active{
      color: #409EFF;
      // background-color: #409EFF;
      background-color: #fffd54;
    }
    .is-active{
      border-bottom: 0;
    }
    body{
      -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    a:focus,input:focus,p:focus,div:focus{
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      -webkit-user-modify:read-write-plaintext-only;
    }
    a{
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
  }
}
</style>
