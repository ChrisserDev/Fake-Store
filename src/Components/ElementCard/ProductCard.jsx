import React, { useContext } from 'react'
import './ProductCard.css'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

export default function ProductCard({product}) {

  const {cart, addProduct, removeProduct} = useContext(CartContext)

  //Variable to control the icons
  const [shoppingCartItem, setShoppingCartItem] = React.useState(false);

  React.useEffect(() => {
      //Is this item in shopping cart?
      setShoppingCartItem(cart.find(item => item.id == product.id))

  }, [cart]);

return (
    <div className='product-card'>
        <img src={product?.image} alt={product?.title}/>
          <h4>{product?.title}</h4>
          <p className='item-category'>{product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</p>
        <section className='bottom-card-section'>
          <h4>{"£" + product?.price}</h4>
          <Link to={`/Product/${product?.id}`} id='discover-more-btn' type='button'>View</Link>
        </section>
        {
            shoppingCartItem?
            <FaHeart id='heart-btn' onClick={() => removeProduct(product?.id)}/>
            :
          <FaRegHeart id='heart-btn' onClick={() => addProduct(product)}/>
          }
    </div>
  )
}