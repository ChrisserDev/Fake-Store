import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './Product.css'
import {useParams} from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'

//This page shows the details of a specific product.

function Product() {

  const {cart, addProduct, removeProduct} = useContext(CartContext)

  //Variable to control the buttons
  const [shoppingCartItem, setShoppingCartItem] = useState(false);

  //We need to extract the id from the url
  const{productId} = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
      //Is this item in shopping cart?
      setShoppingCartItem(cart.find(item => item.id == product?.id))

  }, [cart, product])

  const handleAddToCart = () => {
    if (shoppingCartItem) {
      removeProduct(product?.id);
    } else {
      addProduct(product);
    }
  };


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
        <p id='add-to-cart-btn' onClick={handleAddToCart}>
              {shoppingCartItem ? 'Remove from Cart' : 'Add to Cart'}
        </p>
        </div>
    </div>
  )
}

export default Product