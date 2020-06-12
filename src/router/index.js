import Vue from 'vue';
import VueRouter from 'vue-router';
import Courses from '../views/Courses/Courses';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: Courses
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
