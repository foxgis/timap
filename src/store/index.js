import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    year: 2010,
    theme: '湖泊'
  },

  mutations: {
    changeYear (state, {year}) {
      state.year = year
    },

    changeTheme (state, {theme}) {
      state.theme = theme
    }
  }
})

export default store
