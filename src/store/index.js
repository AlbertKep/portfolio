import axios from "axios";
import { createStore } from 'vuex'


const store = createStore({
  state() {
    return {
      menuIsActive: false,
      aboutContent: ''
    }
  },
  mutations: {
    menuIsActive(state) {
      state.menuIsActive = !state.menuIsActive
    },
    getData(state, payload) {
      state.aboutContent = payload
    }
  },
  actions: {
    menuIsActive({commit}) {
      commit('menuIsActive')
    },
    async getData({commit}) {
      const response = await axios.get("http://localhost:1337/abouts");
      const data = await response.data[0].description
      commit('getData', data)
    }
  }
})

export default store