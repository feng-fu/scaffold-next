const ADD_LATER = 'ADD_LAYER'
const DEL_LATER = 'DEL_LAYER'
const CLR_LAYER = 'CLR_LATER'

const reducer = function(state = [], action) {
  switch(action.type) {
    case ADD_LATER:
      return state.concat(action.payload)
    case DEL_LATER:
      return state.filter(item => item.id !== payload.id)
    case CLR_LAYER:
      return []
    default:
      return state
  }
}

const store = createStore(reducer)

export const addLayer = payload = dispatch => {
  return dispatch({ type: ADD_LATER, payload })
}

export const delLayer = payload = dispatch => {
  return dispatch({ type: DEL_LATER, payload })
}

export default reducer