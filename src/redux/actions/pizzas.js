import API from "../dal/api";

export const setPizzasAC = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const setIsLoadedAC = ( isLoading ) => {
    return {
        type: 'SET_IS_LOADED',
        payload: isLoading
    }
}

export const fetchPizzas = () => (dispatch) => {    
    API.fetchPizzas().then( response => {
        dispatch( setPizzasAC(response.data) );
        dispatch( setIsLoadedAC(true) );
    })
}
