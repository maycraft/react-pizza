import axios from 'axios';

const API = {
    fetchPizzas: (categoryIndex, {type, order}) => {
        const category = categoryIndex === null ? '' : `category=${categoryIndex}`;        
        return axios.get(`/pizzas?${category}&_sort=${type}&_order=${order}`);
    }
}

export default API;