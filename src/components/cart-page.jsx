import React from 'react';
import 'antd/dist/antd.css';
import classes from './cart-page.module.css'
import { List , Button} from 'antd';
import {useSelector} from 'react-redux';
const Cart  = (props) => {

    const item = useSelector((state)=> state.cart.item);
    const totalPrice = useSelector((state)=> state.cart.totalPrice);

    const onCloseCartHandler = ()=> {
        props.showCart(false);
    }



         return (
             <div className={`container`}>
                 <div className={classes.content}  >
                 <div className={classes.cart}>
                 <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={item}
    footer={
      <div  style={{color:'#340762', fontWeight:'bold'}}>
        <b style={{color:'#8119a7', fontFamily:'Rubik' , fontSize:'14px' , letterSpacing:'1'}}>TOTAL  :</b> {totalPrice} AED
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.id}
        extra={
          <img
            width={140}
            alt="logo"
            src={item.img}
          />
        }
      >
        <List.Item.Meta
          title={item.name}
          description={item.dis}
        />
        
        <p style={{color:'black' , fontWeight:'bolder' ,fontFamily:'"Rubik", sans-serif' , textTransform:'initial'}}>
        Total Amount : <span style={{color:'rgb(129 25 167)' , fontWeight:'600' , letterSpacing:'1' , marginLeft:'2px' }}>  {item.count} Pice </span>
        <br></br> 
          Price : <span style={{color:'rgb(129 25 167)' , fontWeight:'600' , letterSpacing:'1' ,marginLeft:'2px'}}> {item.price} AED</span>     
        <br></br> 
        Total  Price : <span style={{color:'rgb(129 25 167)' , fontWeight:'600' , letterSpacing:'1' ,marginLeft:'2px'}}> {item.price *item.count} AED</span>
        
    </p>
      </List.Item>
    )}
  />    <div className={classes.butten}>
        <Button type="link" className={classes.butten_one}>
        SUBMIT
        </Button>
        <Button type="link" className={classes.butten_two} onClick={onCloseCartHandler}>
        CLOSE
        </Button>
       </div>
     </div>

           </div>
          </div>
         )
}

export default Cart;