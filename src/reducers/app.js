import { getFilms } from '../api/swapi'

const GET_FILMS = 'app/GET_FILMS'

export function initFilms() {
  return (dispatch, getState) => {
    getFilms().then((films) => {
      console.log("films", films)
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
