import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';
import {useParams} from 'react-router-dom';

function Product() {

  //This page shows the details of a specific character. What character?
  //We need to extract the id from the url

  const{productId} = useParams();
  const [product, setProduct] = useState('');

  useEffect (() => {
    //Call Api to get the items data
   axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(res => {
      console.log(res.data)
      //Store the data from the API in state
      setProduct(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
  <div className='product-details-container'>
      <img src={product?.image}/>
      <div className='product-info'>
        <h4 id='item-title'>{product?.title}</h4>
        <h4 id='item-price'>{"£" + product?.price}</h4> 
        <strong id='item-description'>Description:</strong>
        <p id='item-long-description'>{product?.description}</p>
        <p id='add-to-cart-btn'>Add to Cart</p>
        </div>
    </div>
  )
}

export default Product