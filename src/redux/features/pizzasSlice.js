import { createSlice } from '@reduxjs/toolkit';

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        items: [],
        isLoaded: false
    },
    reducers: {
        setPizzas( state, action ) {
            state.items.push( action.payload )
        },
        setIsLoaded( state, action ) {
            state.isLoaded = action.isLoaded;
        }
    }
})

export const { setPizzas, setIsLoaded } = pizzasSlice.actions;

export default pizzasSlice.reducer;