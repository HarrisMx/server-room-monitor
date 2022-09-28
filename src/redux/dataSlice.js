import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    currenData: null,
    graphValues: null
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        },
        setCurrentData: (state, action) => {
            state.currenData = action.payload
        },
        setGraphValues: (state, action) => {
            state.graphValues = action.payload
        }
    }
})

export const {updateData, setCurrentData, setGraphValues} = dataSlice.actions;
export default dataSlice.reducer;