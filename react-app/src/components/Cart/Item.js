import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, removeFromCart, removeItem } from "../../store/cart";

const Item = ({ item, count, cart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(count);
  const [isLoaded, setIsLoaded] = useState(false);

  const increaseCount = async (item) => {
    await dispatch(addToCart(item, cart.id));
    setQuantity(() => quantity + 1);
  };
  const decreaseCount = async (item) => {
    if (quantity <= 1) {
      await dispatch(removeItem(item, cart.id));
      setQuantity(() => quantity - 1);
      return;
    }
    await dispatch(removeFromCart(item, cart.id));
    setQuantity(() => quantity - 1);
  };

  if (item && cart) {
    setIsLoaded(true);
  }

  return (
    <>
      {isLoaded && (
        <div key={item.id} className='cart__item'>
          <div className='cart__name'>{item.name}</div>
          <button className='cart__minus' onClick={() => decreaseCount(item)}>
            -
          </button>
          <div className='cart__count'>{quantity}</div>
          <button className='cart__plus' onClick={() => increaseCount(item)}>
            +
          </button>
        </div>
      )}
    </>
  );
};

export default Item;
