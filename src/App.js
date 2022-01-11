import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/Home.js";
import Shopping from "./components/Shopping.js";
import Cart from "./components/Cart.js";
import Nav from "./components/Nav.js";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const updateCart = (championAdded) => {
    cartItems.forEach((cartItem, index) => {
      if (cartItem.key === championAdded.key) {
        championAdded.quantity = parseInt(cartItem.quantity) + parseInt(championAdded.quantity);
        setCartItems(cartItems.splice(index, 1).concat(championAdded));
        return;
      }
    })
    setCartItems(cartItems.concat(championAdded));
  };

  const removeFromCart = (championKey) => {
    setCartItems(cartItems.filter((cartItem) => {
      return cartItem.key !== championKey;
    }));
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/shopping-cart/" element={<Home />} />
        <Route path="/shopping-cart/shopping" element={<Shopping handleSubmit={updateCart}/>} />
        <Route path="/shopping-cart/cart" element={<Cart cartItems={cartItems} handleSubmit={removeFromCart}/>} />
      </Routes>
    </Router>
  );
}

export default App;
