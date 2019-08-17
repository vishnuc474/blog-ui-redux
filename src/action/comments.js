import axios from '../config/axios'

export const startSetComments = () => {
    return (dispatch) => {
        axios.get(`/comments`)
        .then((response) =>{
            // console.log(response.data)
            dispatch(setComments(response.data))
        })
    }
}
export const setComments = (comments) => {
    return {
        type: 'SET_COMMENTS',
        payload: comments
    }
}