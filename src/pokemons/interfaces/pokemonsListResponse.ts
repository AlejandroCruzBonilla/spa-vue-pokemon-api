export interface IPokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: IPokemonListElement[]
}

export interface IPokemonListElement {
  name: string
  url: string
}
