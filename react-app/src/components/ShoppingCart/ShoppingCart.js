import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  // useEffect(() => { dispatch(getCart)})
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  // if (user.cart) {
  //   setLoaded(true);
  // }
  let cart = [];
  useEffect(() => {
    if (user.cart) {
      setLoaded(true);
      cart = Object.values(user.cart);
    }
  }, [setLoaded, user]);
  console.log(cart);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>{loaded && <div>{user.cart.count}</div>}</div>
    </>
  );
};

export default ShoppingCart;
