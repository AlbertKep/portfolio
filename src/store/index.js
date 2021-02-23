import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      menuIsActive: false
    }
  },
  mutations: {
    menuIsActive(state) {
      state.menuIsActive = !state.menuIsActive
    }
  },
  actions: {
    menuIsActive({commit}) {
      commit('menuIsActive')
    }
  }
})

export default store