import { createRouter, createWebHistory } from 'vue-router'
// import Nav_bar from '@/components/Nav_bar.vue'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
  ]
})

export default router

