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
      <AppItem
        v-if="state === 'read'"
        v-bind="info"
      />
      <DetailForm
        v-else
        :info="info"
        @cancel="cancelEdit"
        @submit="confirmEdit"
      />
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
      <AppButton
        v-if="state === 'read'"
        @click="setState('edit')"
      >
        Редактировать
      </AppButton>
    </section>
  </div>
</template>

<script>
import DetailForm from '@/components/goods/DetailForm'

export default {
  components: {
    DetailForm
  },

  async fetch ({ store, redirect, params: { id } }) {
    if (!store.state.goods.data.length) {
      await store.dispatch('goods/fetchData')
    }
    store.commit('detail/setId', id)
    if (!store.getters['detail/info'].id) {
      redirect('/')
    }
  },

  data () {
    return {
      state: 'read'
    }
  },

  computed: {
    info () {
      return this.$store.getters['detail/info']
    },

    isInCart () {
      // Можно было бы использовать Array.prototype.includes(), но я хочу оставить совместимость с
      // IE без полифила
      return !!~this.$store.state.cart.list.indexOf(this.info.id)
    }
  },

  methods: {
    addToCart () {
      this.$store.dispatch('cart/addItem', this.info.id)
    },

    removeFromCart () {
      this.$store.dispatch('cart/removeItem', this.info.id)
    },

    setState (state) {
      this.state = state
    },

    cancelEdit () {
      this.state = 'read'
    },

    confirmEdit (value) {
      this.$store.commit('goods/editItem', value)
      this.state = 'read'
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
  padding: 12px;
  border: 2px solid $gray;

  ::v-deep .app-button + .app-button {
    margin-top: 8px;
  }
}
</style>
