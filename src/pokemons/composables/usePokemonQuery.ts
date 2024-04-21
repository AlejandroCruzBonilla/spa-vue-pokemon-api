import { useQuery } from '@tanstack/vue-query'
import { getPokemonById } from '@/pokemons/helpers/requests'

const usePokemonQuery = (id: string) => {
  const {
    isLoading,
    isError,
    error,
    data: pokemon
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonById(id)
  })

  return {
    //Props
    pokemon,
    isLoading,
    isError,
    error
  }
}

export default usePokemonQuery
