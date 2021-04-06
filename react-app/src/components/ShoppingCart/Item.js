const Item = ({ item, decreaseCount, increaseCount }) => {
  return (
    <div key={item.id} className='cart__item'>
      <div className='cart__name'>
        {item.name}
        {item.id}
      </div>
      <button className='cart__minus' onClick={() => decreaseCount(item)}>
        -
      </button>
      <div className='cart__count'>{item.quantity}</div>
      <button className='cart__plus' onClick={() => increaseCount(item)}>
        +
      </button>
    </div>
  );
};

export default Item;
