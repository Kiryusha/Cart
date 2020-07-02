<template>
  <div class="app-pagination">
    <AppButton
      v-if="currentPage > 1"
      view="square"
      @click="$emit('prev')"
    >
      «
    </AppButton>
    <div class="indicator">
      {{ currentPage }} из {{ totalPages }}
    </div>
    <AppButton
      v-if="(currentPage * pageSize) < total"
      view="square"
      @click="$emit('next')"
    >
      »
    </AppButton>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',

  props: {
    currentPage: {
      type: Number,
      default: 0
    },

    pageSize: {
      type: Number,
      default: 0
    },

    total: {
      type: Number,
      default: 0
    }
  },

  computed: {
    totalPages () {
      return Math.ceil(this.total / this.pageSize)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-pagination {
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.indicator {
  padding: 0 12px;
}
</style>
