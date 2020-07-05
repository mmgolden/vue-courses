<template>
  <div>
    <h2 class="page-title">Courses</h2>
    <CourseTabs />
    <div>
      <CourseCard
        v-for="course in courses"
        :key="course.name"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import CourseTabs from '@/components/CourseTabs.vue';

export default {
  components: {
    CourseCard,
    CourseTabs
  },
  data() {
    return {
      courses: [
        {
          name: 'Introduction to Vue',
          author: 'Melinda Golden',
          summary:
            'Bacon ipsum dolor amet short loin shank corned beef cow. Brisket cupim beef ribs pork chop alcatra chislic tail sirloin bresaola tongue burgdoggen doner.',
          ratings: [5, 5, 4]
        },
        {
          name: 'Creating Forms with Vue',
          author: 'Melinda Golden',
          summary:
            'Bacon ipsum dolor amet strip steak andouille buffalo, prosciutto ribeye frankfurter porchetta tail rump cow bacon. Shankle kevin boudin biltong.',
          ratings: [5, 5]
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
