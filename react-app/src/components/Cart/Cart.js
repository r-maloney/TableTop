import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCart, emptyCart } from "../../store/cart";
import Item from "./Item";
import "./Cart.css";
import "../Explore/Explore.css";

const Cart = ({ showCart, setShowCart }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart);
  let cartItems = null;
  if (cart.items) {
    cartItems = Object.values(cart.items);
  }

  useEffect(() => {
    if (user) dispatch(getCart(user));
  }, [dispatch, user, cart.total]);

  useEffect(() => {
    if (user) dispatch(getCart(user));
  }, [dispatch, user]);

  useEffect(() => {
    if (cart.items) {
      setLoaded(true);
    }
  }, [setLoaded, cart]);

  if (!loaded) {
    return <div className='cart__empty'>Nothing in your cart yet</div>;
  }

  const handleSubmit = () => {
    setShowCart(false);
    dispatch(emptyCart(cart.id));
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
        <div className='cart__items-list'>
          {loaded &&
            cartItems.map((item) => (
              <Item
                item={item.item}
                count={item.count}
                cart={cart}
                key={item.id}
              />
              // <div></div>
            ))}
        </div>
        <div className='cart__checkout'>
          <img
            src={
              "https://yt3.ggpht.com/ytc/AAUvwnjA89B7GNPXth9gmKh2Ez_mwFoDKdSH3QaCpfTZ9w=s900-c-k-c0x00ffffff-no-rj"
            }
            style={{ height: "2rem", position: "float" }}
          ></img>
          <h2>
            Thank you for supporting Phoenix Children's Hospital Foundation!
          </h2>
          <p>Amount Due: ${cart.total}</p>
          <p>Donation Amount: ${parseFloat(cart.donation_amount).toFixed(2)}</p>
          <button className='cart__order' onClick={handleSubmit}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
