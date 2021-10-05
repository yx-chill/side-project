<template>
  <header class="header sticky top-0 z-10">
    <div class="px-10 py-4 bg-header opacity-80 blur flex justify-between relative">
       <a href="#">
      <img src="../assets/img/logo.png" alt="jauntmap logo" class="logo">
      </a>
      <div class="header-main absolute top">
      <slot name="title"></slot>
      </div>
      <Nav />
    </div>
    <div class="header-decorate bg-header-decorate h-3 border-t-2 border-white"></div>
  </header>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Header',
  components: { Nav }
}
</script>

<style lang='scss' scoped>
.logo {
  height: 90px;
}
.header-main {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header-decorate {
  box-shadow: 0px 2px 12px #d4dbea;
  .header {
    z-index: 9999;
  }
}
</style>
