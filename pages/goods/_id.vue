<template>
  <div class="content">
    <section class="breadcrumbs">
      <nuxt-link
        class="breadcrumb"
        to="/"
      >
        &larr; Вернуться к списку
      </nuxt-link>
    </section>
    <section class="title">
      <h1>
        {{ info.name }}
      </h1>
    </section>
    <section class="info">
      <AppItem v-bind="info" />
    </section>
    <section class="controls">
      <AppButton
        v-if="isInCart"
        @click="removeFromCart"
      >
        Удалить из покупок
      </AppButton>
      <AppButton
        v-else
        @click="addToCart"
      >
        Добавить к покупкам
      </AppButton>
    </section>
  </div>
</template>

<script>
export default {
  async fetch ({ store, redirect, params: { id } }) {
    // Повторяем запрос, так как у нас нет отдельного запроса на детальную информацию о товаре
    await store.dispatch('goods/fetchData')
    store.commit('detail/setId', id)
    if (!store.getters['detail/info'].id) {
      redirect('/')
    }
  },

  computed: {
    info () {
      return this.$store.getters['detail/info']
    },

    isInCart () {
      return !!~this.$store.state.cart.list.indexOf(this.info.id)
    }
  },

  methods: {
    addToCart () {
      this.$store.commit('cart/addItem', this.info.id)
    },

    removeFromCart () {
      this.$store.commit('cart/removeItem', this.info.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  @include a-reset;
}

section {
  margin-bottom: 12px;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  border: 2px solid $gray;

  .app-button + .app-button {
    margin-top: 4px;
  }
}
</style>
