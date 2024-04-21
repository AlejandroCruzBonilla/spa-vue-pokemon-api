import type { IPokemonStat } from '@/pokemons/interfaces'
export interface IPokemonStats {
  pokemonName: string
  stats: IPokemonStat[]
  height: number
  weight: number
}
