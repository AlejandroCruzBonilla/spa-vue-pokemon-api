const pokeApi = <T>(endpoint: string): Promise<T> => {
  const baseUrl = 'https://pokeapi.co/api/v2'

  const url = baseUrl + endpoint

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) reject(response)
        return response.json()
      })
      .then((data: T) => resolve(data))
      .catch(reject)
  })
}

export default pokeApi
