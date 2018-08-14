import  ActionTypes from './ActionTypes'

// action 行动  构造函数 两种 返回的都是 plain object
export function addAction() {
  return {
    type: ActionTypes.ADD
  }
}

export function subtractAction() {
  return {
    type: ActionTypes.SUBTRACT
  }
}
