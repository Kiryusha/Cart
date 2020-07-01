// Модуль для работы с товарами: получение, редактирование
export const state = () => ({
  isFetching: false,
  data: []
})

export const mutations = {
  startFetchingData (state) {
    state.isFetching = true
  },

  stopFetchingData (state) {
    state.isFetching = false
  },

  fetchedData (state, payload) {
    state.data = payload
  }
}

export const actions = {
  async fetchData ({ commit }) {
    commit('startFetchingData')
    try {
      const response = await this.$axios.$get('/mock/goods/data.json')
      commit('fetchedData', response)
    } finally {
      commit('stopFetchingData')
    }
  }
}
