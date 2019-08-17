import axios from '../config/axios'

export const startSetPost = () => {
    return (dispatch) => {
        axios.get('/posts')
        .then((response) =>{
            console.log(response.data)
            dispatch(setPosts(response.data))
        })
    }
}
export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}