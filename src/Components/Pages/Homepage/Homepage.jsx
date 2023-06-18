import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Homepage.css'
import ProductCard from '../../ElementCard/ProductCard'

function Homepage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState ([]);

  //Show all the items when the page loads

  useEffect (() => {
    //Call Api to get the items data
   axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      console.log(res.data)
      //Store the data from the API in state
      setProducts(res.data)
    })
    .catch(err => console.log(err))

    //Get the categories from the API
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then(res => {
      setCategories(res.data)
    })
    .catch(err => console.log(err))
  }, []);


  const handleCategory = (category) =>{
    // console.log(category);
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }

  const showAllItems = () =>{
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='homepage-container'>
      <div className='buttons-container'>
      <button id='show-all-btn' onClick={showAllItems}>Show All</button>
          {
              categories.map(category=> (
                <button id="filter-btns" key={category} onClick={() => handleCategory(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
          ))}
      </div>
        <div className='products-container'>
            {
              products.map(item => <ProductCard key={item.id} product={item}/>)
            }
        </div>
    </div>
  )
}

export default Homepage