import type { IPokemonPreview } from './pokemon'

export interface IPokemonsPaginated {
  pokemons: IPokemonPreview[]
  count: number
  next: string | null
  previous: string | null
}
