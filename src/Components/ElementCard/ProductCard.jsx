import React from 'react'
import './ProductCard.css'
import { AiOutlineHeart } from "react-icons/ai";

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product?.image}/>
        <h4>{product?.title}</h4>
        <p className='item-category'>{product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</p>
        <h4>{product?.price + "$"}</h4>
        <i id='heart-btn'><AiOutlineHeart /></i>
    </div>
  )
}

export default ProductCard;