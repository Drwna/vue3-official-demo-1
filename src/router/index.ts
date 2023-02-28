import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import ListView from '@/view/ListView.vue'
import Demo01 from '@/view/demo/Demo01.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  {
    path: '/demo',
    component: ListView,
    children: [{ path: 'demo-01', component: Demo01 }]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export { router }