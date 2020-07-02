// До v2.12 такие запросы я обычно размещал в fetch, но после этой версии они его переделали и
// добавили новый режим работы fetch. Старый режим стал deprecated и для воспроизведения его работы
// сейчас лучше использовать миддлвари.
export default function ({ store }) {
  if (!store.state.goods.data.length) {
    return store.dispatch('goods/fetchData')
  }

  return true
}
