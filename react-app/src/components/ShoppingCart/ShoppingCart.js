import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../Explore/explore.css";
import { addToCart, getCart } from "../../store/cart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart);
  const cartArr = cart.items;
  const cartSet = [];
  const ids = [];
  for (let item of cartArr) {
    console.log(item);
    if (!ids.includes(item.id)) {
      cartSet.push(item);
      ids.push(item.id);
    }
  }
  console.log(cartSet);

  useEffect(() => {
    if (user) dispatch(getCart(user));
  }, [dispatch, user]);

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

  const calculateCount = (id) => {
    cartArr.filter((item) => (item.id = id));
    return cartArr.length;
  };

  const increaseCount = async (item) => {
    await dispatch(addToCart(item, cart.id));
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
            <div key={item.id} className='cart__item'>
              <div className='cart__name'>
                {item.name}
                {item.id}
              </div>
              <button
                className='cart__minus'
                onClick={() => decreaseCount(item)}
              >
                -
              </button>
              <div className='cart__count'>{calculateCount(item.id)}</div>
              <button
                className='cart__plus'
                onClick={() => increaseCount(item)}
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
