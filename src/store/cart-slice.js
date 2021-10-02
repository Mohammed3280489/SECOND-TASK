import {createSlice} from '@reduxjs/toolkit';

const initialState = {item :[] , totalPrice:0};

const cartSlice = createSlice({
    name:'card',
    initialState,
    reducers : {
        addItem(state , actions) {
          const item =  state.item.findIndex(element => element.id === actions.payload.item.id);
          if (item !==-1) {
              state.item[item].count =state.item[item].count+1;
              state.totalPrice =state.totalPrice + state.item[item].price;
          }
          else {
              state.item.push(actions.payload.item)
              state.totalPrice = state.totalPrice +  actions.payload.item.price;
          }

          console.log(state.item, state.totalPrice);
        },

        removeItem(state , action) {
           const item = state.item.findIndex(element=> element.id === action.payload.id);
           console.log(state.item[item].price);
           const price = state.item[item].price;
           
           if (state.item[item].count > 1){
           state.item[item].count=state.item[item].count-1;
           state.totalPrice=state.totalPrice-price;
           }
           else {
               const newitems = state.item.filter(element => element.id !==action.payload.id);
               state.item = newitems;
               state.totalPrice =state.totalPrice-price;
           }
           console.log(state.item, state.totalPrice);
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer
