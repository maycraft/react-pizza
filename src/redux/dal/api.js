import axios from 'axios';

const API = {
    fetchPizzas: ({categoryIndex, objectSortBy}) => {

        const category = categoryIndex === null ? '' : `category=${categoryIndex}`;        
        return axios.get(`/pizzas?${category}&_sort=${objectSortBy.type}&_order=${objectSortBy.order}`);
    }
}

export default API;