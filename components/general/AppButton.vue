<template functional>
  <button
    class="app-button"
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
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  @include typography-p;
  width: 200px;
  cursor: pointer;
}
</style>
