const ADD_LATER = 'ADD_LAYER'
const DEL_LATER = 'DEL_LAYER'
const CLR_LAYER = 'CLR_LATER'

const initState = {
  layers: []
}

const reducer = function(state = initState, action) {
  switch(action.type) {
    case ADD_LATER:
      return Object.assign(state, { layers: state.layers.concat(action.payload) })
    case DEL_LATER:
      return Object.assign(state, { layers: state.layers.filter(v => v.id !== action.payload.id) })
    case CLR_LAYER:
      return { layers: [] }
    default:
      return state
  }
}

export const addLayer = payload => dispatch => {
  return dispatch({ type: ADD_LATER, payload })
}

export const delLayer = payload => dispatch => {
  return dispatch({ type: DEL_LATER, payload })
}

export default reducer