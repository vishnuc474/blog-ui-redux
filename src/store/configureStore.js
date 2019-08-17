import {createStore, combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'
import postReducer from '../reducers/posts'
import limitReducer from '../reducers/limit'
import commentReducer from '../reducers/comments'

const configureStore = () => {
    const state = createStore(combineReducers({
        users: userReducer,
        posts: postReducer,
        limit: limitReducer,
        comments: commentReducer
    }),applyMiddleware(thunk))
    return state
}

export default configureStore