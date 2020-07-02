export default function ({ store, redirect, params: { id } }) {
  store.commit('detail/setId', id)
  if (!store.getters['detail/info'].id) {
    redirect('/')
  }
}
