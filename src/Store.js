// store.js

import {createStore} from 'redux'

import reducer from './view/Reducer'

const store = createStore(reducer)

export default store