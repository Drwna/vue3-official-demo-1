import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/view/HomeView.vue';
import ListView from '@/view/ListView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/list', component: ListView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export { router }