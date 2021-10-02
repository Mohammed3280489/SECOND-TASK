import {createSlice} from '@reduxjs/toolkit'; 

const initialState = {isloading :true};


const loadingSlice = createSlice({
    name : 'loading',
    initialState ,
    reducers :{
        setIsLoading(state , action) {
            console.log(action.payload.isloading)
            state.isloading = action.payload.isloading;
            console.log(state.isloading);
        }
    }
})

export const loadingAction = loadingSlice.actions;
export default loadingSlice.reducer; 