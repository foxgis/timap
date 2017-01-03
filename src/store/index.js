import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    year: 2010
  },

  mutations: {
    changeYear (state, {year}) {
      state.year = year
    }
  }
})

export default store
