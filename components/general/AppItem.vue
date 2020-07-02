<!-- Простой функциоанльный переиспользуемый компонент: "Карточка товара" -->
<template functional>
  <nuxt-link
    class="app-item"
    :to="`/goods/${props.id}`"
  >
    <p>
      Наименование: {{ props.name }}
    </p>
    <p>
      Цена: {{ props.price }} р.
    </p>
    <p>
      Дата покупки: {{ $options.formatDate(props.date) }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppItem',

  props: {
    id: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      default: 0
    },

    date: {
      type: Number,
      default: 0
    }
  },

  formatDate (value) {
    return new Date(value).toLocaleDateString('ru')
  }
}
</script>

<style lang="scss" scoped>
.app-item {
  @include a-reset;
  display: block;
  padding: 12px;
  border: 2px solid $gray;
}
</style>
