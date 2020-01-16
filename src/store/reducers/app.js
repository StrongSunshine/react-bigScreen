import { SET_SOCKET } from '../type'

const defaultState = {
  socket: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}