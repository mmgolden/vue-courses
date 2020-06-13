<template>
  <button :type="type" class="button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      default: 'button',
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
