<template>
  <div>
    <SiteHeader/>
    <RouterView/>
    <SiteFooter/>
  </div>
</template>

<script setup>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';


</script>

<style lang="css" scoped>
</style>