import React from "react";

function Cart(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(event.target.key.value);
  };

  return (
    <div>
      {props.cartItems.map(cartItem => {
        return (
        <div key={cartItem.key}>
          <h3>{cartItem.quantity} {cartItem.name}</h3>
          <h4>Total price is {cartItem.quantity * cartItem.price} RP</h4>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="key" value={cartItem.key} />
            <button>Remove from my cart</button>
          </form>
        </div>
        );})}
        <br/>
        {props.cartItems.length === 0 
          ? <p>No items in the cart. Cannot checkout yet!</p>
          : <button>Checkout</button>
        }
    </div>
  );
};

export default Cart;