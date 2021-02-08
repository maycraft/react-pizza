export const setCategoryIndexAC = idx => {
    return {
        type: 'SET_CATEGORY',
        payload: idx
    }
}

export const setIndexSortByAC = idx => {
    return {
        type: 'SET_INDEX_SORT_BY',
        payload: idx
    }
}
