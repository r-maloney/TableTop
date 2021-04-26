const SET_CART = "cart/setCart";
const ADD_CART = "cart/addCart";
const DELETE_ITEM = "cart/deleteItem";

export const setCart = (cart) => {
  return {
    type: SET_CART,
    payload: cart,
  };
};

export const addCart = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};
export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const addToCart = (item, orderId) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(item),
  };
  const res = await fetch(`/api/cart/${orderId}`, options);
  const json = await res.json();
  await dispatch(addCart(item));
  return json;
};

export const removeFromCart = (item, orderId) => async (dispatch) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(item),
  };
  const res = await fetch(`/api/cart/${orderId}`, options);
  const json = await res.json();

  await dispatch(addCart(item));
  return json;
};

export const removeItem = (item, orderId) => async (dispatch) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(item),
  };
  const res = await fetch(`/api/cart/${orderId}`, options);
  const json = await res.json();

  await dispatch(deleteItem(item));
  return json;
};

export const getCart = (user) => async (dispatch) => {
  const res = await fetch(`/api/cart/${user.id}`);
  if (res.ok) {
    const cart = await res.json();

    if (cart.id) {
      await dispatch(setCart(cart));
      return cart;
    }
  }
};

const initialState = {};

const cartReducer = (state = initialState, action) => {
  let newCart = { ...state };
  switch (action.type) {
    case SET_CART:
      newCart = action.payload;
      return newCart;
    case ADD_CART:
      if (newCart.items[action.payload.id]) {
        newCart.items[action.payload.id].count++;
      } else {
        newCart.items[action.payload.id] = { count: 1, item: action.payload };
      }
      return newCart;
    case DELETE_ITEM:
      delete newCart.items[action.payload.id];

      return newCart;
    default:
      return state;
  }
};

export default cartReducer;
