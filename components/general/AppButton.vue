<!-- Интерфейсный компонент совсем не обязательно делать функциональным. Я даже скажу более, что при
усложнении это может вызвать некоторые неудобства. Моя основная идея: показать, что простые
компоненты, которым не нужен стейт лучше делать функциональным для оптимизации. Благо, ТЗ в этом
случае позволило. -->
<template functional>
  <button
    class="app-button"
    :class="props.view"
    :type="props.type"
    v-on="listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    type: {
      type: String,
      default: 'button'
    },

    view: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  @include typography-p;
  width: 200px;
  cursor: pointer;

  &.square {
    width: 30px;
    height: 30px;
  }

  & + & {
    margin-left: 8px;
  }
}
</style>
