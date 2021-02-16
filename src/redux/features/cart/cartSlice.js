import { createSlice } from '@reduxjs/toolkit'

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

            const allPizzas = [].concat.apply([], Object.values(state.items));
            state.totalCount = allPizzas.length;
            state.totalPrice = allPizzas.reduce( (sum, item) => sum + item.price, 0 );
        },
        clearCart( state, action ){
            state.items = {};
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    }
})

export const { addPizza, clearCart } = cartSlice.actions;
export default cartSlice.reducer;