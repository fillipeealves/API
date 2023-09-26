import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import TeamDetails from './components/TeamDetails.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/team/:id',
    name: 'team-details',
    component: TeamDetails,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
