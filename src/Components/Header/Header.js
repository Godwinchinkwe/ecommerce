import React from "react";
import "./Header.css";
// import { AiOutlineHome } from 'react-icons/ai'
// import { FiAlignJustify } from 'react-icons/fi'
// import { RiContactsBook2Fill } from 'react-icons/ri'
// import { AiOutlineShopping } from 'react-icons/ai'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { Link } from "react-router-dom";
import Logos from "./logos.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Theme from '../Theme';
// import { FaTimes, } from 'react-icons/fa'
// import { FiAlignJustify } from 'react-icons/fi'



function Header({color, change}) {

  // const Header = ({color, change}) => {
  // const [toggle, settoggle] = useState(true)
  // const handletoggle = () => { settoggle(!toggle) }

  // const Night = (<MdOutlineNightlight onClick={handletoggle} />)

  // const Dark = (<div>
  //     <MdOutlineLightMode  onClick={handletoggle} />
  //               </div>)

  

  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const [item, setItem] =useState([])


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
    <div className="Header" style={{backgroundColor: color?  "tomato": null}}>
      <div className="Header_logo">
        <img src={Logos} alt="" onClick={() => navigate('/')} />
      </div>

      <div className="Header_Links">
        <Link className="p1" to={"/"}>
          {" "}
          <p>HOME</p>{" "}
        </Link>

        {/* <Link className="p2" to={"/Category"}> */}
        {/* <p>CATEGORY</p></Link> */}

        <div className='p2'
        onMouseEnter={()=>{setState(!state)}}  
        onMouseLeave={()=>{setState(!state)}}
        ><p>CATEGORY</p>
          {state && <div className='invisible'> </div>}
        {state && dropdown}
        </div>

        <Link className="p3" to={"/Cart"}>
          <p>CART</p>{" "}
        </Link>
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
