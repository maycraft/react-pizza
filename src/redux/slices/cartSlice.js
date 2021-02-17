import { createSlice } from '@reduxjs/toolkit'

const getCombineArr = ( obj ) => [].concat.apply([], Object.values(obj));
const getTotalPrice = ( arr ) => arr.reduce( (sum, item) => sum + item.price, 0 ); 

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalCount: 0,
        totalPrice: 0
    },
    reducers: {
        addPizza( state, action ){
            state.items[action.payload.id]
            ? state.items[action.payload.id].push(action.payload)
            : state.items[action.payload.id] = [action.payload];

            // const allPizzas = [].concat.apply([], Object.values(state.items));
            const allPizzas = getCombineArr(state.items);
            state.totalCount = allPizzas.length;
            state.totalPrice = getTotalPrice(allPizzas);
        },
        clearCart( state, action ){
            state.items = {};
            state.totalCount = 0;
            state.totalPrice = 0;
        },
        deletePizza( state, action ){
            console.log(action);
            delete state.items[action.payload.idx];
            const allPizzas = getCombineArr(state.items);
            state.totalCount = allPizzas.length;
            state.totalPrice = getTotalPrice(allPizzas);
        },
        // encrease( state, action ){
        //     const item = state.items[action.payload];
        // }
    }
})

export const { addPizza, clearCart, deletePizza } = cartSlice.actions;
export default cartSlice.reducer;