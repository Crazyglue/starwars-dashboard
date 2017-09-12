import axios from 'axios'

export function getFilms() {
  const url = "https://swapi.co/api/films"

  return new Promise((resolve, reject) => {
    axios.get(url)
    .catch((error) => {
      console.warn(error)
      reject(error)
    })
    .then((response) => {
      resolve(response.data.results)
    })
  })
}
