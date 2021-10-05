<template>
<nav class="flex justify-end items-end relative">
  <ul class="navbar lg:flex">
    <li class="w-10 h-10 rounded-full bg-white flex justify-center items-center ml-3 mb-3 lg:mb-0 cursor-pointer"
    v-for="item in navList" :key="item.icon">
    <router-link :to=item.path>
      <img :src="item.icon" alt="tool_icon">
    </router-link>
    </li>
  </ul>
  <button class="w-10 h-10 rounded-full bg-white flex justify-center items-center ml-3 cursor-pointer lg:hidden">
    <img src="../assets/img/setting.png" alt="tool_icon">
  </button>
</nav>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Nav',
  setup () {
    const navList = ref([
      { icon: require('../assets/img/search-dark.png'), click: require('../assets/img/search-white.png'), path: 'home' },
      { icon: require('../assets/img/favorites-dark.png'), click: require('../assets/img/favorites-white.png'), path: 'about' },
      { icon: require('../assets/img/calendar-dark.png'), click: require('../assets/img/calendar-white.png'), path: 'home' },
      { icon: require('../assets/img/camera-dark.png'), click: require('../assets/img/camera-white.png'), path: 'home' }
    ])
    return { navList }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  // position: absolute;
  // bottom: -220px;
  // height: 0;
  // overflow: hidden;
  // @media (min-width: 1024px) {
  //   bottom: 0;
  //   height: 100%;
  // }
    li:hover {
      background: linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%);
      color: #FFF;
    }
  }
</style>
