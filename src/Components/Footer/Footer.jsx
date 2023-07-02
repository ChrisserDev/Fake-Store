import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <h2>Made by Cristian Serban</h2>
      <Link to='/Contact' id='contact-us-btn'>Contact us</Link>
    </div>
  )
}

export default Footer