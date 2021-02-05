

import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {pizzas as pizzasReducer, filters as filtersReducer} from './reducers';

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer     
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware() ));

export default store;