import { CHANGE_NUMBER } from '../actions/types'

const INITIAL_STATE = {
  number: 0
}

export default (state = INITIAL_STATE, action) => {
  if(action.type === CHANGE_NUMBER){
    return {
      ...state,
      number: action.payload
    }
  }

  return state
}