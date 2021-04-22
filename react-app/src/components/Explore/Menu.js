import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getItems } from "../../store/item";
import { addToCart } from "../../store/cart";
import "./Explore.css";

const Menu = ({ business, orderId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (business) {
      setIsLoaded(true);
      setItems(business.items);
    }
  }, [business]);

  if (!isLoaded) {
    return null;
  }

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
              onClick={() => dispatch(addToCart(item, orderId))}
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
