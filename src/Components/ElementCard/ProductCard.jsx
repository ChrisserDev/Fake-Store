import React from 'react'
import './ProductCard.css'
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product?.image} alt={product?.title}/>
        <h4>{product?.title}</h4>
        <p className='item-category'>{product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</p>
        <h4>{"£" + product?.price}</h4>
        <Link to={`/Product/${product?.id}`} id='more-details-btn' type='button'>More Details</Link>
        <i id='heart-btn'><AiOutlineHeart /></i>
    </div>
  )
}

export default ProductCard;