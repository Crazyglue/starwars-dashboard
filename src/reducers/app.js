import _ from 'lodash'
import { getFilms, getCharacterInfo } from '../api/swapi'

const GET_FILMS = 'app/GET_FILMS'

export function initFilms() {
  return (dispatch, getState) => {
    getFilms().then((films) => {
      console.log("films", films)

      _.map(films, film => {
        film.characters.slice(0, 3).map((character, index) => { // only the first 3 characters
          getCharacterInfo(character).then(charInfo => {
            film.characters[index] = charInfo // replace character url with real character data (which has the url in it)
          })
        })
      })

      dispatch({
        type: GET_FILMS,
        payload: films
      })
    })
  }
}

const initialState = {
  films: []
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload
      }
    default:
      return state
  }
}
