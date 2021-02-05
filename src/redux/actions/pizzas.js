import axios from 'axios';

export const setPizzasAC = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const fetchPizzas = () => (dispatch) => {
    axios.get('http://localhost:3001/pizzas')
    .then( response => {
        dispatch( setPizzasAC(response.data) );
    })
}
