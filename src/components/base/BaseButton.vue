<template>
  <button
    :type="type"
    class="button"
    :class="[{ 'button-outline': outline, 'button-primary': primary }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
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
    },
    outline: {
      type: Boolean
    },
    primary: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 2px solid transparent;
  border: none;
  cursor: pointer;
  color: $color-font-primary;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 24px;
}

.button-outline {
  border: 2px solid $color-font-primary;
  transition: all 0.3s;

  &:hover {
    color: $color-primary;
    border: 2px solid $color-primary;
  }
}

.button-primary {
  border: 2px solid $color-font-primary;
  background: $color-font-primary;
  color: $color-font-contrast;
  transition: all 0.3s;

  &:hover {
    border: 2px solid $color-primary;
    background: $color-primary;
  }
}
</style>
