<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  background: $color-card-background;
  border-radius: 8px;
  padding: 2rem;
}
</style>
