<template>
  <div class="content">
    <h1 class="title">
      {{ info.name }}
    </h1>
  </div>
</template>

<script>
export default {
  async fetch ({ store, redirect, params: { id } }) {
    await store.dispatch('goods/fetchData')
    store.commit('detail/setId', id)
    if (!store.getters['detail/info'].id) {
      redirect('/')
    }
  },

  computed: {
    info () {
      return this.$store.getters['detail/info']
    }
  }
}
</script>

<style lang="css" scoped>
</style>
