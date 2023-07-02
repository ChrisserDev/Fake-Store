import React, { useContext, useState, useEffect } from 'react'
import './Checkout.css'
import { CartContext } from '../../Contexts/CartContext'
import {BsTrash3, BsCheck2Circle} from 'react-icons/bs'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

function Checkout() {

  const {cart, removeProduct, clearCart} = useContext(CartContext)

  //activate useNavigate

  const navigate = useNavigate();

  const showHomePage = () => {
    //could do other things here (such as we need to clear the cart before moving to the homepage)
    clearCart();
    navigate('/')
  }


  //Function to calculate the total price.
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
  }
  
   Modal.setAppElement(document.getElementById('root'));
  
   const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='checkout-container'>
        { cart.length > 0?
        <div className='checkout-box'>
        <div className='checkout-container-header'>
            <p>Item</p>
          <section className='right-side-checkout-container'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </section>
            </div>
          <section>
              {
                cart.map(item => (
                  <div className='checkout-product-item' key={item?.id}>
                    <section className='checkout-left-side'>
                    <img src={item?.image}></img>
                    <h3>{item.title}</h3>
                    </section>
                  <section className='checkout-right-side'>
                    <h2>{"£" + item.price}</h2>
                    <strong id='quantity'>1</strong>
                    <i id='remove-icon' onClick={() => removeProduct(item?.id)}> <BsTrash3 /></i>
                  </section>
                </div>
                ))
              }
          </section>
          <div className='checkout-container-footer'>
              <h3>Total: £{getTotal()}</h3>
              <div className='checkout-modal'>
              <button type='button' id='checkout-btn' onClick={() => setIsOpen(true)}>Checkout</button>

              <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel='Checkout Confirmation'>
                <div className='modal-container'>
                  <i id='modal-check-icon'>< BsCheck2Circle /></i>
                  <h1>Your order was successful!</h1>
                  <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                  <button id='return-btn' onClick={showHomePage}>Return to Main Page</button>
                </div>
              </Modal>
            </div>
          </div>
          </div>
              :
              <p id='no-items-added-message'>No items added to the shopping cart</p>
        }
        </div>
  )
}

export default Checkout