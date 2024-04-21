import type { IPokemon, IPokemonPreview, IPokemonResponse } from '@/pokemons/interfaces'

export const parsePokemon = (pokemon: IPokemonResponse): IPokemon => {
  return {
    id: pokemon.id,
    height: pokemon.height / 10,
    name: pokemon.name,
    sprites: {
      frontDefault: pokemon.sprites.front_default,
      backDefault: pokemon.sprites.back_default,
      frontShiny: pokemon.sprites.front_shiny,
      backShiny: pokemon.sprites.back_shiny
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
    sprite: pokemon.sprites.front_default
  }
}
