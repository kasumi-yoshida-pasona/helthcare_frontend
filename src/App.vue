<script setup>
  import { useRoute } from 'vue-router'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <section class="base">
    <Header />
    <router-view />
    <Footer />
  </section>
</template>

<style lang="scss" scoped>
  .base {
    height: 100%;

  }
</style>
