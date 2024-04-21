import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/shared/views/HomeView.vue'
import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      ...pokemonRoute
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' })
    }
  ]
})

export default router
