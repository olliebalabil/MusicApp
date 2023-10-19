import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import likeReducer from './reducers/likeReducer'

const store = createStore(likeReducer, applyMiddleware(thunk))

export default store