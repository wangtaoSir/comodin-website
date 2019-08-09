<template>
  <div class="app-wrapper">
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <div class="main-container">
      <!-- <pagehead></pagehead> -->
      <navbar v-show="this.$route.path !== '/sMain'" :searchBarFixed="searchBarFixed" :scrollTop="scrollTop"></navbar>
      <!-- <div class="fixed-filling" v-if="searchBarFixed" ref="filling"></div> -->
      <div class="fixed-filling" ref="filling"></div>
      <app-main></app-main>
      <simpleDemand ref="demand"></simpleDemand>
      <!-- <outServices v-show="this.$route.path !== '/sMain'"></outServices> -->
    </div>
  </div>
</template>

<script>
// import { Navbar, AppMain, pagehead } from '@/views/layout/components'
import { Navbar, AppMain } from '@/views/layout/components'
import outServices from '@/views/services/outServices'
import simpleDemand from '@/views/services/simpleDemand'
export default {
  name: 'layout',
  data() {
    return {
      routeName: this.$route.path,
      searchBarFixed: false,
      scrollTop: 0,
    }
  },
  components: {
    Navbar,
    AppMain,
    // pagehead,
    outServices,
    simpleDemand
  },
  computed: {
  },
  methods: {
    func_simpleDemandManager() {
      this.$refs.demand.dialogFormVisible = true
    },
    // handleScroll () {
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   // const offsetTop = document.getElementsByClassName('app-main')[0].offsetTop
    //   scrollTop >= 64 ? this.searchBarFixed = true : this.searchBarFixed = false
    //   this.scrollTop = scrollTop
    //   // if (scrollTop <= 64) {
    //   //   this.$refs.filling.style.height = `${scrollTop}px`
    //   // }
    // }
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .slide_sty{
    width: 100%;
    height:302px;
  }
  .fixed-filling{
    height: 64px;
    width: 100%;
  }
}
</style>
