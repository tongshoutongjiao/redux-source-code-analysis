import * as ActionTypes from './ActionTypes'

const initialState = {
  total: 0
}

export default (state = initialState, action) => {
  const {total} = state
  switch(action.type){
    case ActionTypes.ADD:
      // 加
      return {...state, total: total + 1}
    case ActionTypes.SUBTRACT:
      // 减
      return {...state, total: total - 1}
    default:
      return state
  }
}