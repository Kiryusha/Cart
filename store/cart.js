// Модуль для работы с корзиной покупателя: добавление, удаление
export const state = () => ({
  list: [1, 2, 3, 4, 5, 6, 7],
  sorting: 'date',
  currentPage: 0,
  pageSize: 2
})

export const mutations = {
  addItem (state, id) {
    state.list = [...state.list, id]
  },

  removeItem (state, id) {
    state.list = state.list.filter(item => item !== id)
  },

  setSorting (state, sorting) {
    state.sorting = sorting
  }
}

export const getters = {
  processedList (state, getters, rootState) {
    // Можно было бы использовать Array.prototype.includes(), но я хочу оставить совместимость с IE
    const filteredList = rootState.goods.data.filter(item => !!~state.list.indexOf(item.id))

    switch (state.sorting) {
      case 'date':
        // выводим первой самую последнюю покупку
        return [...filteredList].sort((a, b) => b.date - a.date)
      case 'price':
        // выводим самый дешёвый товар первым
        return [...filteredList].sort((a, b) => a.price - b.price)
      default:
        return filteredList
    }
  }
}
