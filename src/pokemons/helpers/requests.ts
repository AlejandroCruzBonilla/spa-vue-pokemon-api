import type {
  IPokemonListResponse,
  IPokemonResponse,
  IPokemonPreview,
  IPokemonsPaginated,
  IPokemon
} from '@/pokemons/interfaces'

import pokeApi from '@/pokemons/api'
import { parsePokemon, parsePokemonPreview } from '@/pokemons/helpers/parsePokemon'

export const getPokemons = async (limit: number, offset: number): Promise<IPokemonsPaginated> => {
  const { results, next, previous, count } = await pokeApi<IPokemonListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  )

  const pokemonPromises: Promise<IPokemonPreview>[] = []

  for (const pokemon of results) {
    pokemonPromises.push(
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemon: IPokemonResponse) => parsePokemonPreview(pokemon))
    )
  }

  const pokemons = await Promise.all(pokemonPromises)
  return {
    pokemons,
    count,
    next,
    previous
  }
}

export const getPokemonById = async (id: string): Promise<IPokemon> => {
  try {
    const pokemonResponse = await pokeApi<IPokemonResponse>(`/pokemon/${id}`)

    const pokemon = parsePokemon(pokemonResponse)

    return pokemon
  } catch (error) {
    if (error instanceof Response) {
      if (error.status === 404) throw new Error(`Pokemon with id ${id} not found`)
    }
    if (error instanceof Error) throw error

    throw new Error('!!Oops An unexpected error occurred, please try again later')
  }
}
