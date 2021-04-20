import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCart } from "../../store/cart";
import Item from "../ShoppingCart/Item";
import "./Cart.css";
import "../Explore/explore.css";

const Cart = ({ showCart }) => {
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
      <div className='cart__container'>
        <h1>Shopping Cart</h1>
        <div>
          {loaded && cartSet.map((item) => <Item item={item} cart={cart} />)}
        </div>
        <button className='cart__order' onClick={handleSubmit}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;