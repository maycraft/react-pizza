

import { combineReducers, createStore } from 'redux';
import {pizzas as pizzasReducer, filters as filtersReducer} from './reducers';

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer     
})

const store = createStore(rootReducer);
window.store = store;

export default store;