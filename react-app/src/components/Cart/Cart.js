import { useState } from "react";
import "./Cart.css";

const Cart = ({ showCart }) => {
  return (
    <div
      className='sidebar'
      style={showCart ? { transform: "translateX(-100%)" } : {}}
    >
      <h1>cart</h1>
    </div>
  );
};

export default Cart;
