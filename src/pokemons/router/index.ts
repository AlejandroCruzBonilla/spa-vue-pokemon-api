import { ROUTE_NAME } from '@/constants'
import type { RouteRecordRaw } from 'vue-router'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  redirect: { name: 'pokemon-list' },
  name: ROUTE_NAME,
  children: [
    {
      path: `/${ROUTE_NAME}/list`,
      name: 'pokemon-list',
      component: () => import('@/pokemons/views/PokemonsListView.vue')
    },
    {
      path: `/${ROUTE_NAME}/:id`,
      name: 'pokemon-id',
      component: () => import('@/pokemons/views/PokemonByIdView.vue')
    }
  ]
}
