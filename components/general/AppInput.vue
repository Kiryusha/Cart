<template functional>
  <input
    class="app-input"
    :class="{'error': !props.value}"
    :name="props.name"
    :type="props.type"
    :value="props.value"
    v-on="listeners"
  >
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    name: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    value: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app-input {
  @include typography-p;
  width: 200px;
  border: 2px solid $gray;

  &.error {
    border-color: $red;
  }
}
</style>
