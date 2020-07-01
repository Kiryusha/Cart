// Модуль для отображения детальной страницы товара
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
