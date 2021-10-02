import React , {useEffect , useState} from 'react'
import Cards from './components/card';
import './App.css';
import {useDispatch} from 'react-redux';
import { addItemActions} from './store/items-slice';
import Cart from './components/cart-page';

function App() {

  
   const [cart , setShowCart] =useState(false);

   const changeShowCartHandler = (value) => {
       setShowCart(value);
   }
   const Dispatch = useDispatch();

   useEffect (()=>{
       Dispatch(addItemActions());
   },[Dispatch])


  return (
    <> 
     <Cards showCart={changeShowCartHandler}></Cards>
     {cart &&  <Cart showCart={changeShowCartHandler}></Cart> }
    </>
  );

}

export default App;
