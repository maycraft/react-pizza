const initialState = {
    category: null,
    sortBy: 'popular',
}

const filters = ( state = initialState, action ) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.payload
                }
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.payload
                }
            }
    
        default:
            return state;
    }
}

export default filters;