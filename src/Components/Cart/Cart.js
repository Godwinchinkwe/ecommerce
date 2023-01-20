import React, {useContext} from 'react'
import "./Cart.css";
import CartItems from './Cartitems'
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from "../../Features/Features";
import {ThemeContext} from "../API/Context"


const Cart = () => {
  const {totalAmount}=useContext(ThemeContext)
  const cart = useSelector((state) => state.commerce.cart);
  
  const dispatch = useDispatch()

  // const payment =()=> {
  //   const refVal = "my-ref"+ Math.random() *1000;
  //   window.Korapay.initialize
  // }


  return (
    <div className="Cart-Holder">
      <div className="Cart-Box">
      <div className="Cart-Title">
        <h4>Shopping Cart</h4>
        <h3>Total:${totalAmount}</h3>
        <p onClick={()=> {dispatch(clearCart())}}>Remove all</p>
      </div>
      <div className="Cart-Items">
      {
        cart?.map((props)=>(
          <CartItems key={props.id} image={props.image} title={props.title} price={props.price} item={props} QTY={props.QTY} />
        ))
      } 
      </div>
      <div className="Cart-Check">
      <button onClick={
            function payKorapay() {
              window.Korapay.initialize({
                  key: "pk_test_hvmxqvX6y7hefdRtdc6ncX316GUbD37FLfazLUvC",
                  reference: "your-unique",
                  amount: 22000, 
                  currency: "NGN",
                  customer: {
                    name: "John Doe",
                    email: "john@doe.com"
                  },
                  notification_url: "https://example.com/webhook"
              });
          }
      }> Check Out </button>
      
      </div>
      </div>
    </div>
  )
}

export default Cart
