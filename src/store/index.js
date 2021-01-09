import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      menuIsActive: true
    }
  }
})

export default store