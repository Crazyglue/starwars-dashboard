import _ from 'lodash'
import { getFilms, getCharacterInfo, getMoviePoster } from '../api/swapi'

const GET_FILMS = 'app/GET_FILMS'
const GET_CHARACTERS = 'app/GET_CHARACTERS'

export function initFilms() {
  return (dispatch, getState) => {
    getFilms().then((films) => {
      Promise.all(
        _.map(films, (film, index) => {
          return getMoviePoster(film.title).then(path => {
            return "https://image.tmdb.org/t/p/w640/" + path
          })
        })
      )
      .then(filmPosters => {
        _.map(films, (film, index) => {
          films[index].poster_path = filmPosters[index]
        })

        dispatch({
          type: GET_FILMS,
          payload: films
        })

        return films
      })
      .then(films => {
        _.map(films, (film) => {
          var characters = _.uniq(_.flatten(_.map(films, film => { // get a unique list of all characters
            return film.characters
          })))

          Promise.all(_.map(characters, (characterURL, index) => {
            return getCharacterInfo(characterURL)
          }))
          .then(characterDataArray => {
            dispatch({
              type: GET_CHARACTERS,
              payload: characterDataArray
            })
          })
        })
      })
    })
  }
}

const initialState = {
  films: [],
  characters: []
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload
      }
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }
    default:
      return state
  }
}
