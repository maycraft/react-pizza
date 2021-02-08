export const setCategoryIndexAC = idx => {
    return {
        type: 'SET_CATEGORY',
        payload: idx
    }
}

export const setSortByAC = name => {
    return {
        type: 'SET_SORT_BY',
        payload: name
    }
}
