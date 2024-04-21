import img404 from '@/assets/404SM.jpeg'
import type { IPokemon, IPokemonPreview, IPokemonResponse } from '@/pokemons/interfaces'

export const parsePokemon = (pokemon: IPokemonResponse): IPokemon => {
  return {
    id: pokemon.id,
    height: pokemon.height / 10,
    name: pokemon.name,
    sprites: {
      frontDefault: pokemon.sprites.front_default || img404,
      backDefault: pokemon.sprites.back_default || img404,
      frontShiny: pokemon.sprites.front_shiny || img404,
      backShiny: pokemon.sprites.back_shiny || img404
    },
    stats: pokemon.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat
    })),
    types: pokemon.types.map((type) => ({ name: type.type.name })),
    weight: pokemon.weight / 10
  }
}

export const parsePokemonPreview = (pokemon: IPokemonResponse): IPokemonPreview => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprites.front_default || img404
  }
}
