import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatementView from '../views/--StatementView.vue'
import AtomView from '../views/AtomView.vue'
import AboutView from '../views/--AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/statement',
      name: '카드값명세서',
      component: StatementView,
    },
    {
      path: '/atom',
      name: 'atom',
      component: AtomView,
    }
  ],
})

export default router
