import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/shopping-cart">Home</Link>
      <Link to="/shopping-cart/shopping">Shopping</Link>
      <Link to="/shopping-cart/cart">Cart</Link>
    </nav>
  );
};

export default Nav;