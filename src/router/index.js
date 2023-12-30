import { createRouter, createWebHistory } from "vue-router";


import Home from '../views/Home.vue';
import SpecificGameInfo from '../views/SpecificGameInfo.vue';
import FreeGames from '../views/FreeGames.vue';


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
  },
  {
    path: '/freegamesandmore',
    name: 'FreeGames',
    component: FreeGames
  }
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

export default router;
