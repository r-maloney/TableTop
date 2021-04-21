import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCart } from "../../store/cart";
import Item from "./Item";
import "./Cart.css";
import "../Explore/Explore.css";

const Cart = ({ showCart, setShowCart }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart);
  const cartArr = cart.items;
  const cartCount = {};

  for (let item of cartArr) {
    if (cartCount[item.id]) {
      cartCount[item.id].quantity++;
    } else {
      item["quantity"] = 1;
      cartCount[item.id] = item;
    }
  }

  const cartSet = Object.values(cartCount);

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

  return (
    <div
      className='sidebar'
      style={showCart ? { transform: "translateX(-100%)" } : {}}
    >
      <div className='sidebar-header'>
        <button className='arrow-button' onClick={() => setShowCart(false)}>
          <i className='fas fa-arrow-right'></i>
        </button>
        <h1>Shopping Cart</h1>
      </div>
      <div className='cart__container'>
        <div>
          {loaded && cartSet.map((item) => <Item item={item} cart={cart} />)}
        </div>
        <p>Amount Due: {cart.total}</p>
        <p>Donation Amount: GOING TO ....</p>
        <button className='cart__order' onClick={handleSubmit}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
