import { createRouter, createWebHistory } from "vue-router";


import Home from '../views/Home.vue';
import SpecificGameInfo from '../views/SpecificGameInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id',
    name: 'SpecificGameInfo',
    component: SpecificGameInfo,
    props: true
  }
 
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

export default router;
