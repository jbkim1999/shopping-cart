import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shopping">Shopping</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Nav;