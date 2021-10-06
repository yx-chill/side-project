<template>
  <Header>
    <template v-slot:title>
      <div class="w-full text-center">
      <h2 class="mt-10">行程規劃</h2>
      </div>
    </template>
  </Header>
  <div class="main_container">
    <h3 class="text-4xl text-light-400 text-center mt-24">Coming Soon</h3>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Journey',
  components: { Header }
}
</script>

<style>
h2 {
  font-size: 22px;
  line-height: 24px;
}
</style>
