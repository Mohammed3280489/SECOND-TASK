import {createSlice} from '@reduxjs/toolkit';

const initialState = {isError :false ,message:''};

const errorSlice = createSlice({
    name : 'error',
    initialState,
    reducers: {
        setIsError(state , action) {
           state.isError = !state.isError
           state.message = action.payload.message;
        }
    }
})


export const errorAction = errorSlice.actions;
export default errorSlice.reducer;