<template>
  <section class="modal-bg w-full h-full p-4 absolute top-0 left-0 z-20 hidden">
    <div class="modal p-6 bg-light-DEFAULE">
      <h2 class="text-sm text-dark-500">設定距離</h2>
      <div class="pt-20 pb-16 relative">
      <input type="range" max="100" min="0" class="w-10/12 mx-auto" v-model="distance">
      <span class="distance rounded-sm  text-bluegreen bg-light-DEFAULE px-2 py-1 absolute top-10 whitespace-nowrap"
      :style="{ 'left': `${distance}%`, 'transform': `translateX(${-2 * distance}%)` }">
      {{ distance }} 公里</span>
      </div>
      <div class="text-right">
      <button class="reset px-9 py-2 text-dark-400" @click="handleResetClick">恢復預設</button>
      <button class="set px-9 py-2 text-white ml-3" @click="handleSetClick">設定</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Modal',
  setup () {
    const store = useStore()
    const distance = ref(store.state.dis)
    const handleResetClick = () => {
      distance.value = 20
    }
    const handleSetClick = () => {
      const modal = document.querySelector('.modal-bg')
      modal.classList.add('hidden')
      document.body.style.overflow = 'visible'
      store.commit('setDistance', distance.value)
    }
    return { distance, handleResetClick, handleSetClick }
  }
}
</script>

<style lang="scss" scoped>
section {
  background: rgba(214, 215, 217, .7);
}
.modal {
  margin: 0 auto;
  min-width: 350px;
  max-width: 596px;
  box-shadow: -3px -2px 2px #FFFFFF, 0px 2px 8px #D4DBEA;
  button {
    border-radius: 10px;
  }
  input {
    border-radius: 50px;
    outline: none;
  }
  .reset {
    box-shadow: -2px -2px 2px #FFFFFF, 0px 0px 5px #D4DBEA;
  }
  .set {
    background: linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%);
    box-shadow: 0px 2px 5px #C0C7D0;
  }
}
</style>
