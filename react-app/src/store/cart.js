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

export const createCart = (user) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ in_progress: true, user_id: user.id }),
  };
  const res = await fetch(`/api/cart/${user.id}`, options);
  const json = await res.json();
  console.log(json);
  dispatch(setCart({}));
  return res;
};

export const getCart = (user) => async (dispatch) => {
  // const res = await fetch(`/api/cart/${user.id}`);
  const res = await fetch(`/api/cart/${2}`);
  console.log("Hiting cart store", res);
  if (res.ok) {
    const cart = await res.json();
    console.log(cart);
    if (cart.cart.id) {
      await dispatch(setCart(cart));
      return res;
    } else {
      await dispatch(createCart(user));
    }
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
