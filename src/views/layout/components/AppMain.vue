<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>

<style lang="scss">
.app-main{
  // max-width: 1200px;
  margin: 0 auto;
  // padding-top: 10px;
  .app-container{
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    .container-h2{
      margin: 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-left: 16px;
    }
  }
}
</style>
