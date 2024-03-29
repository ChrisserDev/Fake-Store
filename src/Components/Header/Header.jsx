import React, {useContext} from 'react'
import './Header.css'
import { BsFillBasket2Fill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

export default function Header() {

  // Accessing cart data from the CartContext
  const {cart} = useContext(CartContext)

return (
    <div className='header-container'>
        <Link to='/' id='title'>Fake Store</Link>
            <Link to={'/Checkout'} id='basket-icon'><BsFillBasket2Fill /></Link>
            <p id='basket-items'>{cart.length}</p>
    </div>
  )
}