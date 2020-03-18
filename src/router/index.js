import Vue from 'vue';
import VueRouter from 'vue-router';
import Comments from '../components/Comments.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Comments',
    component: Comments,
  },
  {
    path: '/articles/:id',
    name: 'Articles',
    component: () => import('../views/Items.vue'),
  },
  {
    path: '/*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
