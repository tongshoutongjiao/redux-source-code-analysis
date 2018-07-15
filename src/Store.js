import {createStore} from 'redux'

import reducer from './view/Reducer'

const initialState = {
  total: 0
}

const store = createStore(reducer, initialState)

export default store