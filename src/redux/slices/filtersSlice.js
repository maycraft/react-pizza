import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        categoryIndex: null,
        indexSortBy: 0,
    },
    reducers: {
        setCategoryIndex( state, action ) {
            state.categoryIndex = action.payload.idx;
        },
        setSortByIndex( state, action ) {
            state.indexSortBy = action.payload.idx;
        }
    }
})

export const { setCategoryIndex, setSortByIndex } = filtersSlice.actions;

export default filtersSlice.reducer;