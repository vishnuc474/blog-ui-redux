const limitReducer = (state= [],action) => {
    switch(action.type){
        case 'INC_LIMIT' :
            return state+5
        default:
            return 5
    }
}


export default limitReducer