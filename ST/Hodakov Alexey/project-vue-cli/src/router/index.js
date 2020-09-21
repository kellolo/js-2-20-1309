import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/single-page',
    name: 'Single Page',
    component: () => import('../views/single-page.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/products.vue')
  },
  {
    path: '/shopping-cart',
    name: 'Shopping Cart',
    component: () => import('../views/shopping-cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/checkout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
