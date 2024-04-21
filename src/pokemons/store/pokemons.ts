import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { IPokemonPreview } from '../interfaces'

export const usePokemonsStore = defineStore('pokemons', () => {
  const currentPage = ref<number>(1)
  const pageLimit = ref<number>(50)
  const pokemons = ref<IPokemonPreview[]>([])
  const totalPokemons = ref<number>(1)

  //Actions
  const setCurrentPage = (newCurrenPage: number) => {
    if (newCurrenPage < 1 || newCurrenPage > totalPages.value) return
    currentPage.value = newCurrenPage
  }

  const setPageLimit = (newLimit: number) => (pageLimit.value = newLimit)

  const setPokemons = (newPokemons: IPokemonPreview[]) => (pokemons.value = newPokemons)

  const setTotalPokemons = (newTotal: number) => (totalPokemons.value = newTotal)

  //Computed
  const totalPages = computed(() => Math.ceil(totalPokemons.value / pageLimit.value))

  const pageOffset = computed(() => {
    return (currentPage.value - 1) * pageLimit.value
  })

  return {
    //State
    currentPage,
    pageLimit,
    pokemons,
    totalPokemons,

    //Getters
    totalPages,
    pageOffset,

    //Actions
    setCurrentPage,
    setTotalPokemons,
    setPageLimit,
    setPokemons
  }
})
