import './Cart.css'
// import { useEffect, useState } from 'react'
import { BsCart3 } from "react-icons/bs";

import React from 'react'

function Cart() {
  return (

    <div className='Cart_Main'>
    <div className='Cart_wrap'>
        <div className='cart'>
            <BsCart3 style={{ fontSize: 100,color:'black'}} />
        </div>
        <h1>Your cart is empty!</h1>
        <p>Browse our categories and discover our best deals!</p>
        <button>START SHOPPING</button>
    </div>
</div>
  )
}


export default Cart
