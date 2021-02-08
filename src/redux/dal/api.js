import axios from 'axios';

const API = {
    fetchPizzas: () => {
        return axios.get('http://localhost:3001/pizzas')
    }
}

export default API;