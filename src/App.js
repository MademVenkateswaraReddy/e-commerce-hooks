import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gallery from './Links/Gallery';
import Cart from './Links/Cart';
import data from './data.js';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartProducts.find((item) => item.item.id === product.id);

    if (existingProduct) {
      // If the product is in the cart, update its quantity
      setCartProducts((prevCart) =>
        prevCart.map((item) =>
          item.item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartProducts((prevCart) => [...prevCart, { item: product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route
            exact
            path="/Cart"
            element={<Cart cartProducts={cartProducts} />}
          />
          <Route
            exact
            path="/"
            element={
              <Gallery
                productItems={data.ProductItems}
                handleAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
