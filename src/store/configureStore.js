import {createStore, combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'
import postReducer from '../reducers/posts'

const configureStore = () => {
    const state = createStore(combineReducers({
        users: userReducer,
        posts: postReducer
    }),applyMiddleware(thunk))
    return state
}

export default configureStore