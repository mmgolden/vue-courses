<template>
  <BaseCard>
    <div class="first-column">
      <div class="image-placeholder"></div>
    </div>
    <div>
      <h3 class="course-name">{{ course.name }}</h3>
      <p class="course-author">{{ course.author }}</p>
      <p class="course-summary">{{ course.summary }}</p>
      <p class="course-rating">
        {{ averageRating }}
        <span> ({{ numberOfRatings }}) </span>
      </p>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/base/BaseCard.vue';

export default {
  components: {
    BaseCard
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    averageRating() {
      const sum = this.course.ratings.reduce((sum, rating) => {
        return (sum += rating);
      }, 0);
      return (sum / this.course.ratings.length).toFixed(1);
    },

    numberOfRatings() {
      if (this.course.ratings.length === 1) {
        return '1 rating';
      }

      return `${this.course.ratings.length} ratings`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}

.first-column {
  margin-bottom: 2rem;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background: $color-placeholder;
  border-radius: 8px;
}

.course-name {
  @include h3;
  margin-bottom: 0.5rem;
}

.course-author {
  @include p;
  margin-bottom: 1rem;
  color: $color-font-subtle;
}

.course-summary {
  @include p;
  color: $color-font-subtle;
}

.course-rating {
  font-size: 1.125rem;
  color: $color-font-primary;
  font-weight: 600;

  span {
    font-weight: 500;
    color: $color-font-subtle;
  }
}
</style>
