import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <h4>Made by Cristian Serban</h4>
      <Link to='/Contact' id='contact-us-btn'>Contact Us</Link>
    </div>
  )
}

export default Footer