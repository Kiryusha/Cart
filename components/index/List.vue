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
      <AppItem
        v-for="(item, index) in list"
        :key="index"
        v-bind="item"
      />
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

.item + .item {
  margin-top: 4px;
}
</style>
