const initialState = {
    categoryIndex: null,
    sortBy: 'popular',
}

const filters = ( state = initialState, action ) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                categoryIndex: action.payload
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
    
        default:
            return state;
    }
}

export default filters;