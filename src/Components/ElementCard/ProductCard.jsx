import React, { useContext } from 'react'
import './ProductCard.css'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

function ProductCard({product}) {

  const {cart, addProduct, removeProduct} = useContext(CartContext)

  //Variable to control the icons
  const [shoppingCartItem, setShoppingCartItem] = React.useState(false);

  React.useEffect(() => {
      //Is this item in shopping cart?
      setShoppingCartItem(cart.find(item => item.id == product.id))

  }, [cart])

  //Rendering the products from the API on the page

  return (
    <div className='product-card'>
        <img src={product?.image} alt={product?.title}/>
        <h4>{product?.title}</h4>
        <p className='item-category'>{product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</p>
        <h4>{"£" + product?.price}</h4>
        <Link to={`/Product/${product?.id}`} id='more-details-btn' type='button'>More Details</Link>
        {
            shoppingCartItem?
            <FaHeart id='heart-btn' onClick={() => removeProduct(product?.id)}/>
            :
          <FaRegHeart id='heart-btn' onClick={() => addProduct(product)}/>
          }
    </div>
  )
}

export default ProductCard;