<template>
  <Header>
    <template v-slot:title>
      <div class="w-full text-center">
      <h2 class="mt-10">我的收藏</h2>
      </div>
    </template>
  </Header>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Favorite',
  components: { Header }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 22px;
  line-height: 24px;
}
</style>
