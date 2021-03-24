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
  switch (action.type) {
    case SET_CART:
      return { ...action.payload };
    case ADD_CART:
      console.log(state, action);
      let newCart = state;
      newCart[action.payload] = action.payload;
      return newCart;
    default:
      return state;
  }
};

export default cartReducer;
