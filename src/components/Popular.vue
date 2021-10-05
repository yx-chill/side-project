<template>
  <section class="popular mb-28">
      <h2 class="text-lg text-dark-500 mb-3">人氣活動</h2>
      <ul class="grid grid-cols-4 gap-4 lg:grid-cols-6">
        <li class="card p-2 bg-light rounded-md h-full flex flex-col"
        v-for="item in popularList" :key="item.image">
        <div class="card__img h-0 overflow-hidden mb-1">
          <!-- <img :src="`https://picsum.photos/120/90?ramdon=${item.img}`" alt="card_img" class="w-full rounded-md"> -->
        </div>
          <div class="flex flex-col justify-between flex-grow">
            <div class="card__title text-sm relative">{{ item.title }}
              <span class=" text-sm text-price absolute right-0 bottom-0">{{ item.price }}</span>
            </div>
            <button class="rounded-md flex justify-center items-center text-dark-500 text-xs mt-1">
              <img src="../assets/img/Subtract.png" alt="" class="p-2">
              <span>{{ item.location }} {{ item.distance }}</span>
            </button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Popular',
  setup () {
    const popularList = ref([
      { img: 1, title: '印象莫內-光影體驗展', price: '$360', location: '信義區', distance: '1.1km' },
      { img: 2, title: '奈良美智特展', price: '免費', location: '中正區', distance: '1.1km' },
      { img: 3, title: 'S20 Taiwan 2021 泰國潑水音樂節', price: '$1900', location: '北投區', distance: '20km' },
      { img: 4, title: '貓美術館', price: '$300', location: '中山區', distance: '3km' },
      { img: 5, title: '幸福大師-雷諾瓦與二十世紀繪畫', price: '$250', location: '信義區', distance: '0.3km' },
      { img: 6, title: '瘋癲-夢境-神曲-天才達利展', price: '$350', location: '中正區', distance: '0.8km' },
      { img: 7, title: '真相達文西特展', price: '免費', location: '北投區', distance: '5km' }
    ])
    return { popularList }
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: -3px -2px 2px #FFFFFF, 0px 2px 8px #D4DBEA;
  &__title {
    min-height: 42px;
  }
  &__img {
    padding-bottom: 74.98%;
  }
  button {
    box-shadow: -2px -2px 2px #FFFFFF, 0px 0px 5px #D4DBEA;
    background: #F4F5F7;
  }
}
</style>
