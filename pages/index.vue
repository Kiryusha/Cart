<template>
  <div class="content">
    <section class="title">
      <h1>
        Список покупок
      </h1>
    </section>
    <section class="list">
      <List />
    </section>
  </div>
</template>

<script>
import List from '@/components/index/List'

export default {
  components: {
    List
  },

  middleware: 'goods'
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 12px;
}
</style>
