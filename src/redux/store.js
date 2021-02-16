import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

//Функция для теста отправленных экшенов
// const LoggerMiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//             console.log(action);
//             next(action);
//         }
//     }
// }

const store = configureStore({
    reducer: rootReducer,
    // middleware: [...getDefaultMiddleware(), LoggerMiddleware]
});

export default store;