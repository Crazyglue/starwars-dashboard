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
      console.log("response", response)
      resolve(response.data)
    })
  })
}
