import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '@/pokemons/helpers/requests'
import { usePokemonsStore } from '@/pokemons/store/pokemons'

const usePokemonsQuery = () => {
  const store = usePokemonsStore()
  const { currentPage, pageOffset, pageLimit, totalPages, pokemons } = storeToRefs(store)

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['pokemons?limit=&offset=', pageLimit, pageOffset],
    queryFn: () => getPokemons(pageLimit.value, pageOffset.value)
  })

  watch(data, (data) => {
    if (data?.pokemons) {
      store.setPokemons(data.pokemons)
      store.setTotalPokemons(data.count)
    }
  })

  return {
    //Props
    currentPage,
    error,
    isError,
    isLoading,
    pageLimit,
    pageOffset,
    pokemons,
    totalPages,

    //Getters
    pageCount: computed(() => data.value?.pokemons.length ?? 0),

    //Methods
    setCurrentPage: store.setCurrentPage
  }
}

export default usePokemonsQuery
