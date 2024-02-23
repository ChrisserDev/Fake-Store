import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Homepage.css'
import ProductCard from '../../ElementCard/ProductCard'

function Homepage() {

  //Using state to store the products, categories and the loading message that is being displayed whilst the data is fetched from the API.
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState ([]);
  const [loading, setLoading] = useState(true);

  //Using useEffect to show all the items when the page loads
  useEffect (() => {
    //Call the API to get the items data
   axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      console.log(res.data)
      //Store the data from the API in state
      setProducts(res.data)
    })
    .catch(err => console.log(err))

    //Get all the categories from the API
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then(res => {
      setCategories(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  //The following function is used to filter through each category at a time and disuplay the items in that category.
  const handleCategory = (category) =>{
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }

  //The following function is used to get all the products available from all categories. 
  const showAllItems = () =>{
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err));
  };

  //Loading effect
  useEffect(() => {
    setTimeout(() => {
     setLoading(false);
    }, 2000); //Adding 2 seconds delay to the loading message for a better user experience.

   }, []);

  return (
    <div className="homepage-container">
      {loading ? (
        <div className="ring">Loading...</div>
      ) : (
        <>
          <div className="buttons-container">
            <button id="show-all-btn" onClick={showAllItems}>
              Show All
            </button>
            {categories.map((category) => (
            <button
              to="/"
              id="filter-btns"
              key={category}
              onClick={() => handleCategory(category)}
              
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
            ))}
          </div>
          <div className="products-container">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage