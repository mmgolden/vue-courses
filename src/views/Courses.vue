<template>
  <div>
    <h2 class="page-title">Courses</h2>
    <div>
      <course-card
        v-for="course in courses"
        :key="course.name"
        :name="course.name"
        :summary="course.summary"
      ></course-card>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';

export default {
  components: {
    CourseCard
  },
  data() {
    return {
      courses: [
        {
          name: 'Introduction to Vue',
          summary:
            'Bacon ipsum dolor amet short loin shank corned beef cow. Brisket cupim beef ribs pork chop alcatra chislic tail sirloin bresaola tongue burgdoggen doner.'
        },
        {
          name: 'Creating Forms with Vue',
          summary:
            'Bacon ipsum dolor amet strip steak andouille buffalo, prosciutto ribeye frankfurter porchetta tail rump cow bacon. Shankle kevin boudin biltong.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  @include h2;
  margin-bottom: 2rem;
}
</style>
