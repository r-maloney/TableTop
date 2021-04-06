const SET_CART = "cart/setCart";
const ADD_CART = "cart/addCart";

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
  console.log(json);
  await dispatch(addCart(item));
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
  let newCart = state;
  switch (action.type) {
    case SET_CART:
      newCart = action.payload;
      return newCart;
    case ADD_CART:
      console.log(state, action);
      newCart[action.payload] = action.payload;
      return newCart;
    default:
      return state;
  }
};

export default cartReducer;
