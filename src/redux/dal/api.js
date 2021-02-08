import axios from 'axios';

const API = {
    fetchPizzas: (categoryIndex, sortBy) => {
        const category = categoryIndex === null ? '' : `category=${categoryIndex}`; 
        return axios.get(`http://localhost:3001/pizzas?${category}`);
    }
}

export default API;