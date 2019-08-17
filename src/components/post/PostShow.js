import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetComments } from '../../action/comments';

function PostShow (props) {

    console.log(props.match.params.id)
     
        
                // once we get the post info from server then make another api call to fetch the user info

                if(_.isEmpty(props.comments)){
                    props.dispatch(startSetComments())
                } 
            //    {let users=props.users.find(user=>(user.id==props.post.userId))} 
    
    
        return (
            <div>
            {(console.log("props",props))}
                {(props.comments) ? (
                    <div>
                        <h2>{props.post.title}</h2>
                        <p> by 
                        <Link to={`/users/${props.user.userId}`}>
                            { props.user.name }
                        </Link>
                        </p>
                        <p> { props.post.body } </p>
                
                        <h2>Listing Comments - { props.comments.length }</h2>
                        <ul>
                            {props.comments.map(comment => <li key={comment.id}> { comment.name }</li> )}
                        </ul>
                        <Link to="/posts">back</Link>
                </div>

                ) : (
                    <p>loading</p>
                ) }
            </div>  
        )
    }
    const mapStateToProps = (state, props) => {
              return{
            post: state.posts.find(post => post.id==props.match.params.id) ,
            comments: state.comments.filter(comment =>comment.postId==props.match.params.id ),
            user: state.users.find(user => user.id==props.match.params.id)
            
        }
    }
    


export default  connect(mapStateToProps)(PostShow)