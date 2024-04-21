import type { IRouterLink } from '@/shared/interfaces'

export const MainRouteLinks: IRouterLink[] = [
  {
    path: '/',
    name: 'home',
    title: 'Inicio'
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    title: 'Pokémons'
  }
]
