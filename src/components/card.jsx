import React , {useState}   from 'react';
import { useSelector } from 'react-redux';
import classes from './card.module.css';
import {Card ,Spin  , Button } from 'antd';
import {HeartFilled   , ShoppingCartOutlined } from '@ant-design/icons'
import jacket from '../assest/images/jacket.png'
import car from '../assest/images/car.jpg'
import Error from './page-error';
import Form from './form'
import {largScreenPlusbutten} from '../ui/form-style';
import {largScreenMinusbutten} from '../ui/form-style';
import {smallScreenPlusbutten} from '../ui/form-style';
import {smallScreenMinusbutten} from '../ui/form-style';
const Cards = (props) => {
          
  const [counter , setCounter] = useState(0);

     const products   = useSelector((state) => state.item.product);
     const loading    = useSelector((state) => state.loading.isloading) ;
     const error      = useSelector((state)=>state.error.isError); 
     const message    = useSelector((state)=>state.error.message); 
 

    const changeCountetHandler = (value) => {
           setCounter(value);
    }


    const onHeartHandler = (id) => {
            const e = document.getElementById(id);
           if (e.style.backgroundColor ==='rgb(222, 47, 91)'){
                e.style.backgroundColor='#340762';
           }
            else {
              e.style.backgroundColor='rgb(222 47 91)';
              console.log(e.style.backgroundColor);
            }  
        }

    const onShoppinCartHandler = ()=> {
        props.showCart(true);
    }


  return (
         <>
            { error &&<Error message={message}></Error> }
        
      <div className="container"> 
         {loading &&<div className = {classes.spin}><Spin size="large"  /> </div>}

           { (!loading && !error )&& 

           <div className={classes.content} >
            {products.map(element => {
               return ( 

                  <div className={classes.card} key={element.id} >
                     <div className={classes.form}>
                        <Form element = {element}  Plusbutten = {largScreenPlusbutten} 
                        Minusbutten={largScreenMinusbutten} counter = {counter} changeCountetHandler={changeCountetHandler}>
                      </Form> 
                  </div>

                 <div className={classes.point}>
                     <div className={classes.point_one}></div>
                     <div className={classes.point_two}></div>
                 </div>

               <div className={classes.circle}>
                 <div className={classes.circle_border}>
                     <div className={classes.circle_content}>
                         <p style={{fontFamily:'"Rubik", sans-serif'}}>{element.quantity_sold}</p>
                         <p style ={{fontSize: '12px',fontWeight: '600',wordSpacing: '10px',fontFamily:'"Rubik", sans-serif',letterSpacing: '1px' ,color:'#423e3e' , marginBottom:'6px'}}>SOLD</p>
                         <p style ={{fontSize:'11px' , color:'#b2b2b2' , fontFamily:'"Rubik", sans-serif'}}>OUT OF <br/> <span style={{fontFamily:'sans-serif' , fontSize:'13px'}}>{element.product_quantity}</span></p>          
                     </div>
                 </div>
                 <div className={classes.price}>
                    <p>AED {element.product_price}</p>
                  </div>
               </div>

               


               <div className={classes.item_card}> 

                   <Card   style={{ width: 290 , border:'none' ,marginRight:'auto' , marginLeft:'auto' , minHeight:'27px'}} className={classes.card_cover}
                     cover={<img  width = '120px' height='190px'  alt="example" src={jacket} />}>

                         <div className={classes.card_content}>

                             <div className="row" style={{width :'100%'}}>
                                <p className={classes.itme_card_one} style = {{display:'block' , fontSize:'16px' , lineHeight:'1.1' , width:'100%'}}>Buy a <br /><span style={{fontSize:'13px'  , fontWeight:'400',fontFamily:'"Rubik", sans-serif' , color:'black'}}>jacket</span></p> 
                           </div>

                            <div className="row" style={{width :'100%'}}>
                                 <p className={classes.item_card_two} style={{display:'block' , width:'100%'}}>
                                  {element.product_id.description}
                                 </p>
                             </div>
                         </div>
                    </Card>

                       <div className={classes.card_icon}>
                          <Form element={element} Plusbutten = {smallScreenPlusbutten}
                               Minusbutten = {smallScreenMinusbutten}
                               counter = {counter} changeCountetHandler={changeCountetHandler}
                               >
                           </Form>
                           <Button  onClick={onShoppinCartHandler}  className={classes.car_icon_button}>Show your cart </Button>
                       </div>

                      <Card style={{ width: 290 , border:'none' ,marginRight:'auto' , marginLeft:'auto'  , minHeight:'27px'}} className={classes.card_cover}
                          
                         cover={<img  width = '120px' height='190px'  alt="example" src={car} />}>

                             <div className={classes.card_content}>

                                <div className = {classes.half_circle}></div>
                                  <div className={`row ${classes.scroll}`} style={{width :'100%'}}>
                                     <p className={classes.itme_card_one} style = {{display:'block'  , fontSize:'16px', width:'100%' , color:'#8119a7' , lineHeight: '1.1'}}>Get a chance to win: <br/><span style={{fontSize:'13px'  , fontWeight:'400',fontFamily:'"Rubik", sans-serif' , color:'black'}}>{element.prize_id.name}</span></p> 
                                  </div>

                                   <div className="row" style={{width :'100%'}}>
                                     <p className={classes.item_card_two} style={{display:'block' , width:'100%'}}>{element.prize_id.description}</p>
                                  </div>
                              </div>
                        </Card>
                 
                     
            <div className={classes.icons} >
              <HeartFilled style={{ color: 'white', fontSize: '20px', padding: '9px',cursor: 'pointer', borderRadius: '8px',  backgroundColor: '#340762',marginBottom:'12px' }}
                       id='HeartFilled'onClick={()=>{onHeartHandler('HeartFilled')}} >
                 </HeartFilled>
              <ShoppingCartOutlined    onClick={onShoppinCartHandler} style={{ color: 'white',fontSize: '20px',padding: '9px', cursor: 'pointer',borderRadius: '8px', backgroundColor: '#8119a7' }}/>

                   </div>   
                  </div>
                 </div>
                 )}
               )}

           </div>
          } 
      </div>
     </>
    );
}

export default Cards ;