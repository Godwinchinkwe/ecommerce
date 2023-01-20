import React from 'react'
import Cards from '../Cards/Cards'
import Slider from 'react-slick';
import './Body.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Comps from "./gem/Comps.jpg";
import watch from "./gem/watch.jpg";
import wears from "./gem/wears.jpg";

// import { MdLinearScale } from 'react-icons/md';

const Body = ({color})=> {
   

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed:2000,
      autoplaySpeed: 5000,
      cssEase:"linear"

    };

  return (
  <>
    <div className='body'>
      <div className='slider'>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>

          <div className='slider-div'>
            <h2  style={{color: color? "white" : null }}>Get Clothes</h2>
            <img src={wears} alt=""  />
          
          </div>

          <div className='slider-div'>
          <h2  style={{color: color? "white" : null }}>Get Jewelries</h2>
          <img src={watch} alt=""  />
           
          </div>

          <div className='slider-div'>
          <h2  style={{color: color? "white" : null }}>Get Computers</h2>
          <img src={Comps} alt=""  />
           
          </div>
          
        </Slider>
      </div>
        <Cards theme={color}/>
    </div>
    </>
  )
}

export default Body