import axios from '../config/axios'

export const startSetUser = () => {
    return (dispatch) => {
        axios.get('/users')
        .then((response) =>{
            dispatch(setUser(response.data))
        })
    }
}
export const setUser = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}