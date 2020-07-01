<template functional>
  <button
    class="app-button"
    v-on="listeners"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.app-button {
  @include typography-p;
  display: inline-block;
  width: 200px;
}
</style>
