import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../Explore/explore.css";

const ShoppingCart = () => {
  // useEffect(() => { dispatch(getCart)})
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  // if (user.cart) {
  //   setLoaded(true);
  // }
  let cartArr = [];
  useEffect(() => {
    if (user.cart) {
      setLoaded(true);
    }
  }, [setLoaded, user]);
  console.log("cart", cartArr, user.cart);

  if (loaded) {
    let cart = user.cart;
    for (const id in cart) {
      console.log(id);
      cartArr.push(cart[id]);
    }
    console.log(cartArr);
  } else {
    return <div className='cart__empty'>Nothing in your cart yet</div>;
  }

  const handleSubmit = () => {
    history.push("/thank-you");
  };

  return (
    <div className='cart__container'>
      <h1>Shopping Cart</h1>
      <div>
        {loaded &&
          cartArr.map((item) => (
            <div className='cart__item'>
              <div className='cart__name'>{item.item.name}</div>
              <button className='cart__minus'>-</button>
              <div className='cart__count'>{item.count}</div>
              <button className='cart__plus'>+</button>
            </div>
          ))}
      </div>
      <button className='cart__order' onClick={handleSubmit}>
        Order Now
      </button>
    </div>
  );
};

export default ShoppingCart;
