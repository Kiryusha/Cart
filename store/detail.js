// Модуль для работы с детальной страницей товара. В идеале у него должны быть свои запросы данных
// товара, результаты которого должны храниться здесь
export const state = () => ({
  id: 0
})

export const mutations = {
  setId (state, id) {
    state.id = id
  }
}

export const getters = {
  // По-хорошему, должен быть запрос на получение детальной информации товара, но, поскольку у нас
  // только один мок-запрос, мы будем получать данные вот таким геттером.
  info (state, getters, rootState) {
    const [info] = rootState.goods.data.filter(item => item.id === state.id)
    return info || {}
  }
}
