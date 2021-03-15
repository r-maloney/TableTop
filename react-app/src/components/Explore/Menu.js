import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getItems } from "../../store/item";
import { updateCart } from "../../store/cart";
import "./explore.css";

const Menu = ({ business }) => {
  const dispatch = useDispatch();

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

  const addToCart = async (item) => {
    let newCart = { ...cart };
    if (newCart[item.id]) {
      newCart[item.id].count += 1;
      setCart(newCart);
    } else {
      newCart[item.id] = { count: 1, item: item };
      setCart(newCart);
    }
    await dispatch(updateCart(newCart));
  };

  return (
    <>
      <div className='menu__container'>
        {items.map((item) => (
          <div key={item.id} className='item__container'>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <div>{item.donation_percentage}</div>
            <button
              className='button__add-to-order'
              onClick={() => addToCart(item)}
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
