import {createSlice} from '@reduxjs/toolkit';
import {loadingAction} from './loading-slice'
import {errorAction} from './error-slice';
const initialState = {
    product : [],
};

const itemSlice = createSlice({
    name : 'item',
    initialState ,
    reducers : {
        add(state , action) {
            action.payload.product.data.forEach(element => {
                console.log(state);
                state.product.push({
                    id : element.id ,
                    product_price : element.product_price,
                    product_quantity:element.product_quantity,
                    quantity_sold:element.quantity_sold,
                    product_id : {
                        id  : element.product_id.id,
                        img : element.product_id.image,
                        name : element.product_id.name,
                        description : element.product_id.description
                    },
                    prize_id : {
                      id   : element.prize_id.id,
                      img  : element.prize_id.image,
                      name : element.prize_id.name,
                      description : element.prize_id.description
                     }
                });
            });
            console.log(state.product);

        }
        
    }
})




export const addItemActions =   ()=>{
    return  async (dispatch) => {
        
        const getItemData = async()=> {
            
            const response = await fetch ('https://wawinner.its.ae/dev/public/api/v1/front-end/campaign');
            
             if (!response.ok) {
                throw new Error(' sorry !!! An error happend please refresh your page  or try later ');
            }
            else if (response.ok) {
                const data = await response.json();
                return data ;
            }
            
        }
        
        try {
            const data = await getItemData();
            dispatch(itemSlice.actions.add({product:data}));
            dispatch(loadingAction.setIsLoading({isloading:false}));
        }
        catch(error) {
            const message  = error.message + ': sorry !!! An error happend please refresh your page  or try later ';
            dispatch(errorAction.setIsError({message}));
            dispatch(loadingAction.setIsLoading({isloading:false}));
        }
        
    }
}

export const itemActions = itemSlice.actions;
export default itemSlice.reducer; 
