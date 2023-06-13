import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Homepage.css'
import ElementCard from '../ElementCard/ElementCard'

function Homepage() {
  const [elements, setElements] = useState([])

  //Show all the items when the page loads

  useEffect (() => {
    //Call Api to get the items data
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      console.log(res.data)
      //Store the data from the API in state
      setElements(res.data)

    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className='homepage-container'>
        <button id='show-all-items'>All</button>
        <button id='electronics-items'>Electronics</button>
        <button id='jewelery-items'>Jewelery</button>
        <button id='mens-items'>Men's Clothing</button>
        <button id='womens-items'>Women's Clothing</button>
        <div className='elements-container'>
            {
              elements.map(item => <ElementCard key={item.id} element={item}/>)
            }
        </div>
    </div>
  )
}

export default Homepage