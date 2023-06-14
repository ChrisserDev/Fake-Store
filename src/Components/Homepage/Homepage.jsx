import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Homepage.css'
import ElementCard from '../ElementCard/ElementCard'

function Homepage() {
  const [elements, setElements] = useState([]);
  const [categories, setCategories] = useState ([]);

  //Show all the items when the page loads

  // const categories = ["Electronics", "jewelery", "men's clothing", "women's clothing"];

  useEffect (() => {
    //Call Api to get the items data
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      console.log(res.data)
      //Store the data from the API in state
      setElements(res.data)
    })
    .catch(err => console.log(err))

    //Get the categories from the API
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then(res => {
      console.log(res.data)
      setCategories(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className='homepage-container'>
      <div className='buttons-container'>
      <button id='show-all-items'>Show All</button>
          {
              categories.map(category=> (
                <button id="filter-btns" key={category} onClick={() => handleCategoryClick(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
              
          ))}
      </div>
        <div className='elements-container'>
            {
              elements.map(item => <ElementCard key={item.id} element={item}/>)
            }
        </div>
    </div>
  )
}

export default Homepage