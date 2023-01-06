import React from 'react'
import"./Loading.css"
import giffy from "./giffy.gif"

function Loading() {
  return (
    <div>
       
        <img src ={giffy} alt=""/>
        
        <h1>Loading please wait...</h1>
    </div>
  )
}

export default Loading