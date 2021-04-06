import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, removeFromCart } from "../../store/cart";

const Item = ({ item, cart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseCount = async (item) => {
    await dispatch(addToCart(item, cart.id));
    setQuantity(() => quantity + 1);
  };
  const decreaseCount = async (item) => {
    await dispatch(removeFromCart(item, cart.id));
    setQuantity(() => quantity - 1);
  };

  return (
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
  );
};

export default Item;
