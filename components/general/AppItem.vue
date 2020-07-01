<template functional>
  <div class="item">
    <p>
      Наименование: {{ props.name }}
    </p>
    <p>
      Цена: {{ props.price }} р.
    </p>
    <p>
      Дата покупки: {{ $options.formatDate(props.date) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppItem',

  props: {
    id: {
      type: Number,
      default: 0
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
.item {
  padding: 12px;
  border: 2px solid $gray;
}
</style>
