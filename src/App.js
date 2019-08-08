import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import About from './components/About'
import Posts from './components/post/Posts'
import PostShow from './components/post/PostShow'
import Users from './components/user/Users'
import UserShow from './components/user/UserShow'

function App (props) {
        return (
            <BrowserRouter>
                <div>
                    <h3>Blog</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/users">Users</Link> </li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>

                            
                    <Route path="/" component={Posts} exact={true} />
                    <Route path="/about" component={About}/>
                    <Route path="/posts" component={Posts} exact={true} />
                    <Route path="/posts/:id" component={PostShow} />
                    <Route path="/users" component={Users} exact={true}/>
                    <Route path="/users/:id" component={UserShow}/>
                 </div>
            </BrowserRouter>
        )
    }
const mapStateToProps = (state) => {
    return {
        users: state.users,
        posts: state.posts
    }
}

export default  connect(mapStateToProps)(App)