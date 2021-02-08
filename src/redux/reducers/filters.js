const initialState = {
    categoryIndex: null,
    indexSortBy: 0,
}

const filters = ( state = initialState, action ) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                categoryIndex: action.payload
            }
        case 'SET_INDEX_SORT_BY':
            return {
                ...state,
                indexSortBy: action.payload
            }
    
        default:
            return state;
    }
}

export default filters;