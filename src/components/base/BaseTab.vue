<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
