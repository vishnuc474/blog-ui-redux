import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={
        users:[]
    }}

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (response => {
            const users= response.data
            console.log(users)
            this.setState(()=>({users:users}))
        })
    }

    render(){
        return(
            <div>
            <h3>Users list -{this.state.users.length}</h3>
            <ul>
                {
                    this.state.users.map(user=>
                    {return <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>})
                }
            </ul>

            </div>
    
        )
        }
}
export default Users