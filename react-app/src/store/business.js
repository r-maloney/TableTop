const SET_BUSINESSES = "businesses/setBusinesses";

const setBusinesses = (business) => {
  return {
    type: SET_BUSINESSES,
    payload: business,
  };
};

export const getBusinesses = () => async (dispatch) => {
  const res = await fetch("/api/businesses/");
  if (res.ok) {
    const { businesses } = await res.json();
    await dispatch(setBusinesses(businesses));
    return res;
  }
};

const initialState = { businesses: null };

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESSES:
      let newState = {};
      for (let business of action.payload) {
        newState[business.id] = business;
      }
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
