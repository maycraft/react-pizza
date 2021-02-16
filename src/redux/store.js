import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers';

const LoggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.log(action);
            next(action);
        }

    }
}

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), LoggerMiddleware]
});

export default store;