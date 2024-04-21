export interface IPokemon {
  id: number
  height: number
  name: string
  sprites: IPokemonSprites
  stats: IPokemonStat[]
  types: IPokemonType[]
  weight: number
}

export interface IPokemonSprites {
  frontDefault: string
  backDefault: string
  frontShiny: string
  backShiny: string
}

export interface IPokemonStat {
  name: string
  value: number
}

export interface IPokemonType {
  name: string
}

export interface IPokemonPreview {
  id: number
  name: string
  sprite: string
}
