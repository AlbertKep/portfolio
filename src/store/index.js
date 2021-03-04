import axios from 'axios'
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
    getAboutData(state, payload) {
      state.aboutContent = payload
    }

  },
  actions: {
    menuIsActive({commit}) {
      commit('menuIsActive')
    },
    async getAboutData({commit}) {
      const baseURI = 'https://albert-kepski-portfolio.herokuapp.com/abouts'

      try {        
      const getData = await axios.get(baseURI)
      const data = await getData.data[0].description
      commit('getAboutData', data)
      } catch (error){
        const errorMessage = 'Something went wrong. Refresh the page.'
      commit('getAboutData', errorMessage)
      }
      
    }
  }
})

export default store