import React, {useState, useEffect} from 'react'
import './Cards.css'
import { useDispatch } from 'react-redux'
import { bringProducts } from '../../Features/Features'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'


const Cards = ({theme}) => {
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [load, setLoad] =useState(false)

  

  async function getProducts(){
    try{
      setLoad(true)
      const res = await axios.get ('https://fakestoreapi.com/products')
    console.log(res.data);
    setProducts(res.data)
    dispatch(bringProducts(res.data))
    
    setLoad(false)
    
  }catch(error){
     if (error.response){
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
     } else if (error.request){
      console.log(error.request);
     } else{
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div className='cards'>
    <div className='card-wrap'>
      {
load? <Loading /> :
      products?.map((i)=>(
        <Link key={i.id}
         className='shadow' to={`/Detail/${i.id}`} style={{backgroundColor: theme? "white":null}}>
      <div className='image-card'>
          <img src={i.image} className='wed' alt="" /> 
      </div>
      <div className='card-text'>
        <p>{i.title}</p>
        <h4># {i.price}</h4>
    </div>
    </Link>
      ))}
     </div>
    </div>
    

  )
}

export default Cards;