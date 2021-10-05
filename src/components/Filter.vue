<template>
  <ul class="filter flex justify-center mb-9">
      <li class="pr-1 md:pr-3"
      v-for="item in categoryList" :key="item.id">
        <button class="text-sm px-2 py-2 rounded-lg hover:text-white md:px-8 lg:px-9"
        @click="categoryButtonClick"
        :class="{ 'active': currcategory===item.title }">
        {{ item.title }}
        </button>
      </li>
    </ul>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Filter',
  setup () {
    const currcategory = ref('全部')
    const categoryList = ref([
      { id: 1, title: '全部' },
      { id: 2, title: '藝文' },
      { id: 3, title: '古蹟' },
      { id: 4, title: '免費' },
      { id: 5, title: '收費' }
    ])
    const categoryButtonClick = (e) => {
      currcategory.value = e.target.innerText
      // filter
    }
    return { categoryList, categoryButtonClick, currcategory }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  button {
    box-shadow: 0px 2px 5px #C0C7D0;
    &:hover {
    background: linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%);
    }
  }
}
.active {
  color: #FFF;
  background: linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%);
}
</style>
