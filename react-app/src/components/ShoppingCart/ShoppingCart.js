import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../Explore/explore.css";
import { addToCart, getCart } from "../../store/cart";
import Item from "./Item";

const ShoppingCart = () => {
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
      console.log(item);
    }
  }

  const cartSet = Object.values(cartCount);

  //Need to add item component. Get object.values from cartCount and map over array. Passing in item as props

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
    console.log("dispatched addtocart");
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
          cartSet.map((item) => (
            <Item
              item={item}
              decreaseCount={decreaseCount}
              increaseCount={increaseCount}
            />
          ))}
      </div>
      <button className='cart__order' onClick={handleSubmit}>
        Order Now
      </button>
    </div>
  );
};

export default ShoppingCart;
