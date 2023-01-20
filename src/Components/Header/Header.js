import React from "react";
import "./Header.css";
// import { AiOutlineHome } from 'react-icons/ai'
// import { FiAlignJustify } from 'react-icons/fi'
// import { RiContactsBook2Fill } from 'react-icons/ri'
import { AiOutlineShopping } from 'react-icons/ai'
import {BsCart4} from "react-icons/bs"
// import { MdOutlineLightMode } from "react-icons/md";
// import { MdOutlineNightlight } from "react-icons/md";
import { Link } from "react-router-dom";
import Logos from "./logos.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Theme from '../Theme';
import { useSelector } from "react-redux";



function Header({color, change}) {

let activeStyle = {
  color:"red",
  textDecoration: "underline",

}
  
  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const [item, setItem] =useState([])
  const amount = useSelector((state) => state.commerce.amount);


  const dropdown = (
    <div className='drop-list'>
    {item?.map((i)=>(
      <Link className='List' key={[i]} to={`/categories/${i}`}><p key={[i]} className='List-item' >{i}</p></Link> 
    ))}
    </div>
  )
  async function getItem(){
    const res = await axios.get(`https://fakestoreapi.com/products/categories`)
    setItem(res.data)
  }
  
  useEffect(()=>{
    getItem()
  }, [])

  return (
    <div className="Header" style={{backgroundColor: color?  "grey": null}}>
      <div className="Header_logo">
        <img src={Logos} alt="" onClick={() => navigate('/')} />
      </div>

      <div className="Header_Links">
        <NavLink className="p1" to="/" style = {({isActive}) => isActive ? activeStyle : undefined
}><p>HOME</p> </NavLink>

      <NavLink className="p2" to="/categories"
            style={({ isActive }) =>
              isActive? activeStyle: undefined}>
                <div
        onMouseEnter={()=>{setState(!state)}}  
        onMouseLeave={()=>{setState(!state)}}>
          <p>CATEGORY</p>
          {state && <div className="invincible"> </div>}
        {state && dropdown}
        </div>
         </NavLink>

        <NavLink  to={"Cart/"} className="p2"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
          <p>
            CART<BsCart4/> {amount}</p>{" "}
        </NavLink>
      </div>

      <div className="Header_Toggle">
        {/* <MdOutlineLightMode fontSize={30} />
        <MdOutlineNightlight fontSize={30} color="black" /> */}
        {/* {toggle ? Night : Dark } */}
        <Theme theme={color} toggler={change} />
       
      </div>
    </div>
  );
}

export default Header;
