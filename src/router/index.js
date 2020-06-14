import Vue from 'vue';
import VueRouter from 'vue-router';
import Courses from '../views/Courses.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/courses' },
  {
    path: '/courses',
    name: 'courses',
    component: Courses
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
