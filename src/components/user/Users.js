import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import { startSetUser } from '../../action/users';


class Users extends React.Component{

    componentDidMount(){
         
            if(_.isEmpty(this.props.users)){
                this.props.dispatch(startSetUser())
            }
            // console.log(users)
        
    }

    render(){
        return(
            <div>
            {(this.props.users) ? (
                <div>
                <h3>Users list -{this.props.users.length}</h3>
                <ul>
                {
                    this.props.users.map(user=>
                    {return <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>})
                }
                </ul>
                </div>
            ) : ( <h3>Loading</h3>

            ) }
            </div>
                
        )
        }
}
const mapStateToProps = (state) => {
    console.log("state", state)
    return{
        users: state.users,
        posts: state.posts,
        limit: state.limit
    }

} 

export default connect(mapStateToProps)(Users)