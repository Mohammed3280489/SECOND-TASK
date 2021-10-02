import {PlusOutlined , MinusOutlined , RadiusUprightOutlined} from '@ant-design/icons';
import {notification} from 'antd';
import {cartAction} from '../store/cart-slice';
import { useDispatch } from 'react-redux';
import jacket from '../assest/images/jacket.png'
const Form = (props) => {

   
    const Dispatch = useDispatch();
const openNotification =  (placement , product)=> {
         
    if (props.counter >= product.product_quantity) {
        const topRight ='topRight';
        notification.info({
            message: `Notification ${placement}`,
            description:
            'We are sorry, there are no more items from this product.. We will work soon to provide this product.. Best regards',
            topRight
           });
       }
       else {
           if (props.counter>1 && props.counter<product.product_quantity) {
               Dispatch(cartAction.addItem({item:{id:product.product_id.id}}))
               props.changeCountetHandler(props.counter+1)
           }
           else {
           const itemPrice = +product.product_price;
           props.changeCountetHandler(props.counter+1);
           const item = {
               id :product.product_id.id,
               name:'jacket',
               dis :product.product_id.description,
               img :jacket,
               price:itemPrice,
               count:1
           };
           Dispatch(cartAction.addItem({item}));
         }
       }
   };

const onDeleteItemHandler = (id)=> {
       if (props.counter > 0) {
       props.changeCountetHandler(props.counter -1);
       Dispatch(cartAction.removeItem({id}));
       }

   }


   return ( <>
    <PlusOutlined   
    style={props.Plusbutten} 
             onClick={() => openNotification(`the max item you can add it 
             ${props.element.product_quantity}`, props.element)}>
        <RadiusUprightOutlined />
   </PlusOutlined>

     <p>{props.counter}</p>

    <MinusOutlined   style={props.Minusbutten}
         onClick={ ()=> onDeleteItemHandler(props.element.product_id.id)} >
    </MinusOutlined>

     </>
   )
 
}

export default Form