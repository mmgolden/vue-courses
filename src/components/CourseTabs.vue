<template>
  <ul class="course-tabs">
    <li>All courses</li>
    <li>Favorites</li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.course-tabs {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  border-bottom: 1px solid $color-divider;

  li {
    padding: 1rem 1.5rem;
  }
}
</style>
