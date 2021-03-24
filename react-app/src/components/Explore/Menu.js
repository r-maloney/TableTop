import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getItems } from "../../store/item";
import { addToCart } from "../../store/cart";
import { userCart } from "../../store/session";
import "./explore.css";

const Menu = ({ business, orderId, addMessage }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    if (business) {
      setIsLoaded(true);
      setItems(business.items);
    }
  }, [business]);

  if (!isLoaded) {
    return null;
  }

  const addItemToCart = async (item) => {
    if (cart[item.id]) {
      cart[item.id].count += 1;
      setCart(cart);
    } else {
      cart[item.id] = { count: 1, item: item };
      setCart(cart);
    }
    addMessage(item);
    const res = await dispatch(addToCart(item, orderId));
    console.log(res);
  };

  //redux state(doesn't persist reload)
  // const addToCart = async (item) => {
  //   // let newCart = { ...cart };
  //   if (cart[item.id]) {
  //     cart[item.id].count += 1;
  //     setCart(cart);
  //   } else {
  //     cart[item.id] = { count: 1, item: item };
  //     setCart(cart);
  //   }
  //   addMessage(item);
  //   const res = await dispatch(userCart(user, cart));
  //   console.log(res);
  // };

  return (
    <>
      <div className='menu__container'>
        {items.map((item) => (
          <div key={item.id} className='item__container'>
            <div className='item__name'>{item.name}</div>
            <div className='item__description'>{item.description}</div>
            <div className='item__price'>${item.price}</div>
            <div className='item__donation_percentage'>
              Donation Percentage: {item.donation_percentage} %
            </div>
            <button
              className='button__add-to-order'
              onClick={() => addItemToCart(item)}
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
