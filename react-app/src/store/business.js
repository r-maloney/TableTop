const SET_BUSINESS = "business/setUser";

const setBusinesses = (business) => {
  return {
    type: SET_BUSINESS,
    payload: business,
  };
};

export const getBusinesses = () => async (dispatch) => {
  const res = await fetch("/api/businesses");
  if (res.ok) {
    const businesses = res.data;
    await dispatch(setBusinesses(businesses));
    return res;
  }
};

const initialState = { business: null };

const businessReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_BUSINESS:
      newState = Object.assign({}, state);
      newState.business = action.payload;
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
