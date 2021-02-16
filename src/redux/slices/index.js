import { combineReducers } from 'redux';
import pizzasReducer from './pizzasSlice';
import filtersReducer from './filtersSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({ 
    pizzas: pizzasReducer, 
    filters: filtersReducer,
    cart: cartReducer });

export default rootReducer;