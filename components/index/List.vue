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
        <template v-for="(item, index) in list">
          <AppItem
            v-if="shouldShowItem(index)"
            :key="index"
            v-bind="item"
          />
        </template>
        <AppPagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="list.length"
          @prev="handlePrev"
          @next="handleNext"
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
    },

    pageSize () {
      return this.$store.state.cart.pageSize
    },

    currentPage: {
      get () {
        return this.$store.state.cart.currentPage
      },
      set (value) {
        this.$store.commit('cart/setCurrentPage', value)
      }
    }
  },

  methods: {
    setSorting (type) {
      this.sorting = type
    },

    // Так как у нас нет АПИ как такового, реализуем пагинацию фронтовыми средствами: устанавливаем
    // ограничения рендера элементов и редактируем их через стор
    shouldShowItem (index) {
      return index < (this.pageSize * this.currentPage) &&
        index >= (this.pageSize * (this.currentPage - 1))
    },

    handlePrev () {
      this.currentPage -= 1
    },

    handleNext () {
      this.currentPage += 1
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
  padding: 8px 8px 0;
}

.app-item + .app-item {
  margin-top: 8px;
}
</style>
