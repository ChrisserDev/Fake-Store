# Fake-Store 
https://fakeowebstore.netlify.app/

## Overview
This project is a React-based e-commerce website called "Fake Store." It includes various components such as a homepage displaying products, a product details page, a shopping cart, a checkout page, and a contact form. 

## Key Features:

### Global State Management: 

Utilizes React context (CartContext) to manage the global state of the shopping cart. This allows components across the application to access and update the cart state.

### Local Storage Integration: 

Uses localStorage to persist the shopping cart data. The cart state is loaded from local storage on page load and updated in local storage whenever the cart changes.

### Product Display: 

The homepage displays products fetched from the "Fake Store" API. Users can filter products by category or view all products.

### Product Details: 

Clicking on a product reveals detailed information, including the product image, title, price, and a description. Users can add or remove items from the cart on this page.

### Shopping Cart: 

The header displays the total number of items in the shopping cart. Users can navigate to the checkout page to review and confirm their purchases.

### Checkout Page: 

Lists the items in the cart with details such as image, title, price, and quantity. Provides a total price calculation and a checkout button. Modal functionality is implemented for a successful order confirmation.

### Contact Form: 

A contact form allows users to submit their first name, last name, and a message. A modal confirms the successful submission of the form.

### Responsive Design: 

The application is designed to be responsive, with styles adjusted for various screen sizes.
