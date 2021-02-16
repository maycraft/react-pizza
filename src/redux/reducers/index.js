import { combineReducers } from 'redux';
import pizzasReducer from '../features/pizzas/pizzasSlice';
import filtersReducer from '../features/filters/filtersSlice';

import cart from './cart'

const rootReducer = combineReducers({ 
    pizzas: pizzasReducer, 
    filters: filtersReducer,
    cart });

export default rootReducer;