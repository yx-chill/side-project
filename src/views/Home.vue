<template>
  <Header>
    <template v-slot:title>
      <div class="flex justify-center flex-wrap">
        <div class="w-full flex justify-center items-center mb-4">
          <h2 class="text-dark-500 mr-2">{{ locationInfo.city }}</h2>
          <span class="text-dark-500 mr-1">{{ locationInfo.temperature }}°C</span>
          <img :src="locationInfo.weather" alt="weather_icon" class="mr-3">
          <img src="../assets/img/umbrella.png" alt="umbrella_icon">
          <span class="text-blue text-sm">{{ locationInfo.Probability }}%</span>
        </div>
        <div class="w-full flex justify-center items-center">
          <div class="w-12 h-12 rounded-full bg-white flex justify-center items-center mr-3">
            <img src="../assets/img/Vector.png" alt="jauntmap_user_icon">
          </div>
          <div class="search h-12 relative">
            <input type="search" class="w-full h-full rounded-lg opacity-70 pl-12 pr-3 py-3" placeholder="輸入目的地、景點、活動..."
            v-model.trim="keyword" @input="search">
            <img src="@/assets/img/search.png" alt="search_icon" class="absolute top-3 left-4 cursor-pointer">
          </div>
          <div class="filter w-12 h-12 rounded-full flex justify-center items-center ml-3 cursor-pointer"
          @click="handleModalShow">
            <img src="../assets/img/filter.png" alt="filter_icon">
          </div>
        </div>
      </div>
    </template>
  </Header>
  <div class="main_container pt-9 overflow-hidden">
    <Filter />
    <Popular />
    <Nearby />
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'
import { get } from '@/utils/request'
// import { useStore } from 'vuex'
import Header from '@/components/Header.vue'
import Filter from '@/components/Filter.vue'
import Popular from '@/components/Popular.vue'
import Nearby from '@/components/Nearby.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Home',
  components: {
    Header, Nearby, Popular, Filter, Modal
  },
  setup () {
    // const store = useStore()
    // const lat = store.state.lat
    // const lng = store.state.lng
    // const dis = store.state.dis
    // &$filter=contains(Name,'${keyword.value}')&$spatialFilter=nearby(${lat},${lng},${dis})
    const locationInfo = reactive({ city: '台北市', temperature: 29, weather: require('../assets/img/sun.png'), Probability: 10 })
    const handleModalShow = () => {
      const modal = document.querySelector('.modal-bg')
      document.body.style.overflow = 'hidden'
      modal.classList.remove('hidden')
    }
    const keyword = ref('')
    const search = async () => {
      try {
        const result = await get(`/v2/Tourism/ScenicSpot?$top=10$filter=contains(Name,'${keyword.value}')&$format=JSON`)
        console.log(result)
      } catch (e) {
        // showToast('請求失敗')
        console.log('失敗')
      }
      // console.log(`/v2/Tourism/ScenicSpot?$top=10$filter=contains(Name, '${keyword.value}')&$spatialFilter=nearby(${lat},${lng},${dis})&$format=JSON`)
    }
    return { locationInfo, handleModalShow, search, keyword }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .logo {
    height: 90px;
  }
  .filter {
    background: linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%);
  }
  .search {
    width: 70%;
  }
}
.main_container {
  width: 75%;
  margin: 0 auto;
}
</style>
