const SET_CART = "cart/setCart";

export const setCart = (cart) => {
  return {
    type: SET_CART,
    payload: cart,
  };
};

export const updateCart = (cart) => async (dispatch) => {
  console.log(cart);
  await dispatch(setCart(cart));
  console.log(cart);
  return cart;
};

export const getCart = (user) => async (dispatch) => {
  const res = await fetch(`/api/cart/${user.id}`);
  console.log("Hiting cart store");
  if (res.ok) {
    console.log(res);
    const { cart } = await res.json();
    await dispatch(setCart(cart));
    console.log(cart);
    return res;
  }
};

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...action.payload };
    default:
      return state;
  }
};

export default cartReducer;
