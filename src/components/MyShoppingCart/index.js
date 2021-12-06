import React from 'react';

function MyShoppingCart(props) {

  const cartItems = props.cart.map((element, idx) => {
    return (
      <li key={idx} onClick={() => props.handleClick(idx)}>
        {`${element.name} $${element.price}`}
      </li>
    )
  })
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {cartItems}
    </div>
  );
}

export default MyShoppingCart;
