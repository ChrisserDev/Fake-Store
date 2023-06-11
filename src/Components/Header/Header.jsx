import React from 'react'
import './Header.css';
import { BsFillBasket2Fill } from "react-icons/bs";

function Header() {
  return (
    <div className='header-container'>
        <h1>Fake Store</h1>
        <i><BsFillBasket2Fill /></i>
    </div>
  )
}

export default Header