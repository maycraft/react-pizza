import { combineReducers } from 'redux';
import pizzasReducer from '../features/pizzas/pizzasSlice';
import filtersReducer from '../features/filters/filtersSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({ 
    pizzas: pizzasReducer, 
    filters: filtersReducer,
    cart: cartReducer });

export default rootReducer;