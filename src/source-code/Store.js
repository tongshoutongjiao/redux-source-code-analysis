
function dispatch(action) {
  // 要求 action 是简单对象
  if (!isPlainObject(action)) {
    throw new Error(
      'Actions must be plain objects. ' +
      'Use custom middleware for async actions.'
    )
  }
  
  // 要求 action 必须包含 type 参数
  if (typeof action.type === 'undefined') {
    throw new Error(
      'Actions may not have an undefined "type" property. ' +
      'Have you misspelled a constant?'
    )
  }
  
  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.')
  }
  
  try {
    isDispatching = true
    // 将 state 和 action 传给 reducer，并执行。
    currentState = currentReducer(currentState, action)
  } finally {
    isDispatching = false
  }
  
  const listeners = (currentListeners = nextListeners)
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i]
    listener()
  }
  
  // 返回的 action 在 中间件 中会用到
  return action
}