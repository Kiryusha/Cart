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
  },

  isFetchingFailed (state) {
    state.isFetching = false
    state.data = []
  },

  editItem (state, payload) {
    const data = [...state.data]
    const [item] = data.filter(item => item.id === payload.id)
    item.name = payload.name
    item.price = payload.price
    item.date = payload.date
    state.data = data
  }
}

export const actions = {
  async fetchData ({ commit }) {
    commit('startFetchingData')
    try {
      const response = await this.$axios.$get('/mock/goods/data.json')
      commit('fetchedData', response)
    } catch (e) {
      commit('isFetchingFailed')
    } finally {
      commit('stopFetchingData')
    }
  }
}
