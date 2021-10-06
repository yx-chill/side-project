import { createStore } from 'vuex'

export default createStore({
  state: {
    lat: '',
    lng: '',
    dis: 20
  },
  mutations: {
    setCoordinate (state, arr) {
      [state.lat, state.lng] = arr
    },
    setDistance (state, dis) {
      state.dis = dis
    }
  },
  actions: {
    getCoordinate (store) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const coordsArr = [position.coords.latitude, position.coords.longitude]
          store.commit('setCoordinate', coordsArr)
        }, () => alert('請開啟定位，並重新載入，才能使用小旅行，享有完整的使用體驗'))
      } else {
        console.log('請開啟定位，並重新載入，才能使用小旅行，享有完整的使用體驗')
      }
    }
  },
  modules: {
  }
})
