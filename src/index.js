import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import {startSetComments} from './action/comments'
import configureStore from './store/configureStore';
import {startSetUser} from './action/users'
import { startSetPost } from './action/posts';


const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
store.dispatch(startSetUser())
store.dispatch(startSetComments())
store.dispatch(startSetPost())

ReactDOM.render(jsx, document.getElementById('root'))