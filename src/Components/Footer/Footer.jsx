import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-container'>
      <h3>Made by Cristian Serban</h3>
      <Link to='/Contact'>Contact us</Link>
    </div>
  )
}