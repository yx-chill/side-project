<template>
<router-view />
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const { lat, lng } = toRefs(store.state)
    onMounted(() => {
      store.dispatch('getCoordinate')
    })
    return { lat, lng }
  }
}
</script>

<style lang="scss" scoped>
</style>
