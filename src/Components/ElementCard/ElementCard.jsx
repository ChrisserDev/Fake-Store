import React from 'react'
import './ElementCard.css'
import { AiOutlineHeart } from "react-icons/ai";

function ElementCard({element}) {
  return (
    <div className='element-card'>
        <img src={element?.image}/>
        <h4>{element?.title}</h4>
        <p className='item-category'>{element?.category.charAt(0).toUpperCase() + element?.category.slice(1)}</p>
        <h4>{element?.price + "$"}</h4>
        <i id='heart-btn'><AiOutlineHeart /></i>
    </div>
  )
}

export default ElementCard