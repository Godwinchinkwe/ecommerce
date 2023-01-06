import React, {useEffect, useState} from 'react'
import "./Detail.css";
import axios from "axios";
import {useParams} from "react-router-dom"

const Detail = ({color}) => {
    const {id} = useParams()
    const [item, setItem] = useState([]);

    const getItem= async()=>{
        try{
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(res.data)
            setItem(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getItem()
        console.log(item)
    }, )

  return (
    <div className="detail-holder" style={{backgroundColor:color? "black" :null}}> 
        <div className="detail-card"  style={{backgroundColor:color? "white" :null}}>
            <div className="detail-image">
                <div  className="image-div">
                    <img className="detail-img" src={item.image} alt=""/>
                </div>
                <div  className="image-title">
                    <h4>{item.title}</h4>
                </div>
            </div>
            <div className="detail-details">
                <p className="detail-desc"><span>Description:</span> {item.description}</p>
                <p className="detail-cat">Category: {item.category}</p>
              
                <div className="detail-button">Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Detail