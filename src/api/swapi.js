import axios from 'axios'
import _ from 'lodash'

export function getFilms() {
  const url = "https://swapi.co/api/films"

  return new Promise((resolve, reject) => {
    axios.get(url)
    .catch((error) => {
      console.warn(error)
      reject(error)
    })
    .then((response) => {
      let sortedResults = _.sortBy(response.data.results, 'release_date')
      resolve(sortedResults)
    })
  })
}

export function getCharacterInfo(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .catch((error) => {
      console.warn(error)
      reject(error)
    })
    .then((response) => {
      resolve(response.data)
    })
  })
}

export function getMoviePoster(movieTitle) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=f907bcb4d2c2acc471f7ea8b7ab6b764&query=' + movieTitle
  return new Promise((resolve, reject) => {
    axios.get(url)
    .catch((error) => {
      console.warn(error)
      reject(error)
    })
    .then((response) => {
      resolve(response.data.results[0].poster_path)
    })
  })
}
