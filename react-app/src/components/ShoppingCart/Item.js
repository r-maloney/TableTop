import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../store/cart";

const Item = ({ item, cart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseCount = async (item) => {
    const newItem = await dispatch(addToCart(item, cart.id));

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
