import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// ChallengeView
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/challenges',
    name: 'challenges',    
    component: () => import('../views/ChallengesView.vue')
  },
  {
    path: '/challenge/:id',
    name: 'ChallengeView',
    component: () => import('../views/ChallengeView.vue'),
    props: true,
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/ArticleListView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../components/AuthModal.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
