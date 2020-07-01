<template>
  <div class="content">
    <h1 class="title">
      Список покупок
    </h1>
    <List />
  </div>
</template>

<script>
import List from '@/components/index/List'

export default {
  components: {
    List
  },

  fetch ({ store }) {
    return store.dispatch('goods/fetchData')
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 12px;
}
</style>
