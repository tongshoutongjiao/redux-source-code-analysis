// store.js

import createStore from './createStore'

import reducer from './view/Reducer'

const store = createStore(reducer)

export default store