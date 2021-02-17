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
            delete state.items[action.payload.id];
            const allPizzas = getCombineArr(state.items);
            state.totalCount = allPizzas.length;
            state.totalPrice = getTotalPrice(allPizzas);
        },
        encreasePizzaItem( state, action ){
            const item = state.items[action.payload.id];
            item.push(item[0]);
            const allPizzas = getCombineArr(state.items);
            state.totalCount = allPizzas.length;
            state.totalPrice = getTotalPrice(allPizzas);
        },
        decreasePizzaItem( state, action ){
            const item = state.items[action.payload.id];
            if(item.length > 1){
                item.pop();
                const allPizzas = getCombineArr(state.items);
                state.totalCount = allPizzas.length;
                state.totalPrice = getTotalPrice(allPizzas);
            }
        }
    }
})

export const { addPizza, clearCart, deletePizza, encreasePizzaItem, decreasePizzaItem } = cartSlice.actions;
export default cartSlice.reducer;