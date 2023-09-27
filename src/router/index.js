import { createRouter, createWebHistory } from 'vue-router'
/*import {medsSection} from '../views/medsSection.vue'
/*[]*/
const routes = [
  /* {
     path: '/',
     name: 'medsSection',
     // route level code-splitting
     // this generates a separate chunk (About.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: medsSection
   },
   {
     path: '/',
     name: 'about',
     // route level code-splitting
     // this generates a separate chunk (About.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import('../views/AboutView.vue')
   }*/

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
