const SET_BUSINESS = "item/setItem";

const setItems = (item) => {
  return {
    type: SET_BUSINESS,
    payload: item,
  };
};

export const getItems = () => async (dispatch) => {
  const res = await fetch("/api/items");
  if (res.ok) {
    const { items } = await res.json();
    await dispatch(setItems(items));
    console.log(items);
    return res;
  }
};

const initialState = { item: null };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default itemReducer;
