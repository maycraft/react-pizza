import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../dal/api';

export const fetchPizzasByCategory = createAsyncThunk(
    'pizzas/fetchAllPizzas',
    async (objArgs, thunkAPI) => {
        const response = await API.fetchPizzas(objArgs);
        thunkAPI.dispatch(setIsLoaded(true));
        return response.data;
    }
)

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        items: [],
        isLoaded: false
    },
    reducers: {
        setIsLoaded( state, action ) {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: {
        [fetchPizzasByCategory.fulfilled]: ( state, action ) => {
            state.items = action.payload;
        }
    }
})
export const { setIsLoaded } = pizzasSlice.actions;

export default pizzasSlice.reducer;