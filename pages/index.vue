<template>
  <div class="container">
    <h1>
      Cart
    </h1>
  </div>
</template>

<script>
export default {
  fetch ({ store }) {
    return store.dispatch('goods/fetchData')
  }
}
</script>

<style lang="scss" scoped>
</style>
