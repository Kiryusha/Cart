<template>
  <div class="list">
    <div class="controls">
      <div class="sorting">
        Сортировать по:&nbsp;
        <span
          class="switcher"
          :class="{'active': sorting === 'date'}"
          @click="setSorting('date')"
        >
          дате покупки&nbsp;
        </span>
        <span
          class="switcher"
          :class="{'active': sorting === 'price'}"
          @click="setSorting('price')"
        >
          цене
        </span>
      </div>
    </div>
    <div class="container">
      <template v-if="list.length">
        <AppItem
          v-for="(item, index) in list"
          :key="index"
          v-bind="item"
        />
      </template>
      <template v-else>
        К сожалению, покупок не найдено.
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',

  computed: {
    sorting: {
      get () {
        return this.$store.state.cart.sorting
      },
      set (value) {
        this.$store.commit('cart/setSorting', value)
      }
    },

    list () {
      return this.$store.getters['cart/processedList']
    }
  },

  methods: {
    setSorting (type) {
      this.sorting = type
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  border: 2px solid $gray;
}

.controls {
  padding: 4px;
  border-bottom: 2px solid $gray;
}

.switcher {
  cursor: pointer;

  &.active {
    color: $red;
    cursor: default;
  }
}

.container {
  padding: 4px;
}

.app-item + .app-item {
  margin-top: 4px;
}
</style>
