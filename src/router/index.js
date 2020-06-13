import Vue from 'vue';
import VueRouter from 'vue-router';
import Courses from '../views/Courses.vue';

Vue.use(VueRouter);

const Login = () =>
  import(/* webpackChunkName: "login" */ '../views/Login.vue');

const Signup = () =>
  import(/* webpackChunkName: "signup" */ '../views/Signup.vue');

const routes = [
  { path: '/', redirect: '/courses' },
  {
    path: '/courses',
    name: 'courses',
    component: Courses
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
