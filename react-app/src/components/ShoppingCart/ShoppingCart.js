import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../Explore/explore.css";

const ShoppingCart = () => {
  // useEffect(() => { dispatch(getCart)})
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  const cartArr = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (cartArr) {
      setLoaded(true);
    }
  }, [setLoaded, cartArr]);

  if (!loaded) {
    return <div className='cart__empty'>Nothing in your cart yet</div>;
  }

  const handleSubmit = () => {
    history.push("/thank-you");
  };

  const increaseCount = (id) => {
    // const newCount = count + 1;
    // setCount(newCount);
    // let newId = parseInt(id);
    // let cart = user.cart;
    // console.log(cart[1], cart[newId], cart[id], cart.id, cart.newId);
    // console.log(user.cart, user.cart[id]);
    // let cart = user.cart[item_id]["count"]++;
    // dispatch(userCart(user, cart));
  };
  const decreaseCount = (item_id) => {
    // let cart = user.cart[item_id];
    // dispatch(userCart(user, cart));
  };

  return (
    <div className='cart__container'>
      <h1>Shopping Cart</h1>
      <div>
        {loaded &&
          cartArr.map((item) => (
            <div className='cart__item'>
              <div className='cart__name'>{item.name}</div>
              <button
                className='cart__minus'
                onClick={() => decreaseCount(item.id)}
              >
                -
              </button>
              <div className='cart__count'>{item.count}</div>
              <button
                className='cart__plus'
                onClick={() => increaseCount(item.id)}
              >
                +
              </button>
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
