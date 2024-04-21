export interface IPokemonResponse {
  abilities: IPokemonResponseAbility[]
  base_experience: number
  cries: IPokemonResponseCries
  forms: IPokemonResponseSpecies[]
  game_indices: IPokemonResponseGameIndex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: IPokemonResponseMove[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: IPokemonResponseSpecies
  sprites: IPokemonResponseSprites
  stats: IPokemonResponseStat[]
  types: IPokemonResponseType[]
  weight: number
}

export interface IPokemonResponseAbility {
  ability: IPokemonResponseSpecies
  is_hidden: boolean
  slot: number
}

export interface IPokemonResponseSpecies {
  name: string
  url: string
}

export interface IPokemonResponseCries {
  latest: string
  legacy: string
}

export interface IPokemonResponseGameIndex {
  game_index: number
  version: IPokemonResponseSpecies
}

export interface IPokemonResponseMove {
  move: IPokemonResponseSpecies
  version_group_details: IPokemonResponseVersionGroupDetail[]
}

export interface IPokemonResponseVersionGroupDetail {
  level_learned_at: number
  move_learn_method: IPokemonResponseSpecies
  version_group: IPokemonResponseSpecies
}

export interface IPokemonResponseGenerationV {
  'black-white': IPokemonResponseSprites
}

export interface IPokemonResponseGenerationIv {
  'diamond-pearl': IPokemonResponseSprites
  'heartgold-soulsilver': IPokemonResponseSprites
  platinum: IPokemonResponseSprites
}

export interface IPokemonResponseVersions {
  'generation-i': IPokemonResponseGenerationI
  'generation-ii': IPokemonResponseGenerationIi
  'generation-iii': IPokemonResponseGenerationIii
  'generation-iv': IPokemonResponseGenerationIv
  'generation-v': IPokemonResponseGenerationV
  'generation-vi': { [key: string]: IPokemonResponseHome }
  'generation-vii': IPokemonResponseGenerationVii
  'generation-viii': IPokemonResponseGenerationViii
}

export interface IPokemonResponseOther {
  dream_world: IPokemonResponseDreamWorld
  home: IPokemonResponseHome
  'official-artwork': IPokemonResponseOfficialArtwork
  showdown: IPokemonResponseSprites
}

export interface IPokemonResponseSprites {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: IPokemonResponseOther
  versions?: IPokemonResponseVersions
  animated?: IPokemonResponseSprites
}

export interface IPokemonResponseGenerationI {
  'red-blue': IPokemonResponseRedBlue
  yellow: IPokemonResponseRedBlue
}

export interface IPokemonResponseRedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface IPokemonResponseGenerationIi {
  crystal: IPokemonResponseCrystal
  gold: IPokemonResponseGold
  silver: IPokemonResponseGold
}

export interface IPokemonResponseCrystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export interface IPokemonResponseGold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent?: string
}

export interface IPokemonResponseGenerationIii {
  emerald: IPokemonResponseOfficialArtwork
  'firered-leafgreen': IPokemonResponseGold
  'ruby-sapphire': IPokemonResponseGold
}

export interface IPokemonResponseOfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface IPokemonResponseHome {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export interface IPokemonResponseGenerationVii {
  icons: IPokemonResponseDreamWorld
  'ultra-sun-ultra-moon': IPokemonResponseHome
}

export interface IPokemonResponseDreamWorld {
  front_default: string
  front_female: null
}

export interface IPokemonResponseGenerationViii {
  icons: IPokemonResponseDreamWorld
}

export interface IPokemonResponseStat {
  base_stat: number
  effort: number
  stat: IPokemonResponseSpecies
}

export interface IPokemonResponseType {
  slot: number
  type: IPokemonResponseSpecies
}
