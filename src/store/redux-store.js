import {configureStore} from '@reduxjs/toolkit';
import itemSlice from './items-slice'
import loadingSlice from './loading-slice';
import cartSlice from './cart-slice';
import errorSlice from './error-slice';

const store = configureStore({
    reducer : {
       item   : itemSlice,
       loading:loadingSlice ,
       cart   : cartSlice,
       error  : errorSlice
    }
})

export default store ;