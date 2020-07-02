<!-- Простой функциоанльный переиспользуемый компонент: "Карточка товара" -->
<template functional>
  <component
    :is="props.type === 'link' ? 'nuxt-link' : 'div'"
    class="app-item"
    :class="props.type"
    :to="props.type === 'link' ? `/goods/${props.id}` : false"
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
  </component>
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
    },

    type: {
      type: String,
      default: 'link'
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
  transition: background-color .2s;

  &:hover {
    background-color: rgba($gray, .3);
  }

  &.static:hover {
    background-color: transparent;
  }
}
</style>
