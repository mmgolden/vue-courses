<template>
  <div class="course-card">
    <base-card>
      <h3 class="course-name">{{ name }}</h3>
      <p class="course-summary">{{ summary }}</p>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '@/components/base/BaseCard.vue';

export default {
  components: {
    BaseCard
  },
  props: {
    name: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.course-card {
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.course-name {
  @include h3;
  margin-bottom: 1.125rem;
}

.course-summary {
  @include p;
  color: $color-font-subtle;
}
</style>
