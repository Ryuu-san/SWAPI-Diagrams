import { createRouter, createWebHistory } from 'vue-router'

import ListPeople from '@/pages/list-people/list-people.vue'
import Diagram from '@/pages/diagram/diagram.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListPeople
    },
    {
      path: '/diagram',
      name: 'diagram',
      component: Diagram
    }
  ]
})

export default router
