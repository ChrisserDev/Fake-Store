import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './Components/Contexts/CartContext'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Pages/Homepage/Homepage'
import Contact from './Components/Pages/ContactPage/Contact'
import Checkout from './Components/Pages/CheckoutPage/Checkout'
import Product from './Components/Pages/ProductDetailsPage/Product'
import ReactDOM from 'react-dom/client'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <CartContextProvider >
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
