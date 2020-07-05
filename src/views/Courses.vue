<template>
  <div>
    <h2 class="page-title">Courses</h2>
    <BaseTabs>
      <BaseTab title="All courses">
        <div>
          <CourseCard
            v-for="course in allCourses"
            :key="course.name"
            :course="course"
          />
        </div>
      </BaseTab>
      <BaseTab title="Favorites">
        <div>
          <CourseCard
            v-for="course in favoriteCourses"
            :key="course.name"
            :course="course"
          />
        </div>
      </BaseTab>
    </BaseTabs>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import BaseTabs from '@/components/base/BaseTabs.vue';
import BaseTab from '@/components/base/BaseTab.vue';

export default {
  components: {
    CourseCard,
    BaseTabs,
    BaseTab
  },
  data() {
    return {
      allCourses: [
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
        },
        {
          name: 'Vue Router',
          author: 'Melinda Golden',
          summary:
            'Bacon ipsum dolor amet strip steak andouille buffalo, prosciutto ribeye frankfurter porchetta tail rump cow bacon. Shankle kevin boudin biltong.',
          ratings: [4]
        }
      ],
      favoriteCourses: [
        {
          name: 'Vue Router',
          author: 'Melinda Golden',
          summary:
            'Bacon ipsum dolor amet strip steak andouille buffalo, prosciutto ribeye frankfurter porchetta tail rump cow bacon. Shankle kevin boudin biltong.',
          ratings: [4]
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
