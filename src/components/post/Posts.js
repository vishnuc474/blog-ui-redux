    import React from 'react' 
    import _ from 'lodash'
    import {startSetPost} from '../../action/posts'
    import { Link } from 'react-router-dom'
    import {connect} from 'react-redux'
    import { inc_limit } from '../../action/limit';

    class Posts extends React.Component {
        

        componentDidMount() {
            if(_.isEmpty(this.props.posts)){
                this.props.dispatch(startSetPost())
            }    
            console.log(this.props.limit) 
        }

        handleLoad= ()=> {
            if(this.props.posts.length>this.props.limit ){
            this.props.dispatch((inc_limit()))
            }
            
        }

        render() {
            return (
                <div>
                    <h3>Listing Posts
                        <small> showing {this.props.posts.length !== 0 && this.props.limit} of {this.props.posts.length}</small>
                    </h3>
                    <ul>
                        {this.props.posts.slice(0, this.props.limit).map(post => <li key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                 {post.id}
                                {post.title}
                            </Link>
                        </li>)
                        }
                    </ul>
                 {<button onClick={this.handleLoad}>load more</button>}
                </div>
            )
        }
    }
    const mapStateToProps = (state) => {
        console.log("state", state)
        return{
            users: state.user,
            posts: state.posts,
            limit: state.limit
        }

    }

    export default connect(mapStateToProps)(Posts)