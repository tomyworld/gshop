<template>
    <div class="app">
      <router-view></router-view>
      <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
    export default{
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
