// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  // useEffect(() => { dispatch(getCart)})

  const cart = useSelector((state) => Object.values(state.cart));
  console.log(cart);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>{}</div>
    </>
  );
};

export default ShoppingCart;
