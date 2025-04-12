import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AtomView from '../views/AtomView.vue'
import StatementView from '../views/StatementView.vue'
import BoardView from '../views/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/atom',
      name: 'atom',
      component: AtomView,
    },
    {
      path: '/statement',
      name: '피커',
      component: StatementView,
    },
    {
      path: '/board',
      name: '보드게시판',
      component: BoardView,
    },
  ],
})

export default router
