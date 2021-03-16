const SET_CHARITY = "charity/setCharity";

const setCharities = (charity) => {
  return {
    type: SET_CHARITY,
    payload: charity,
  };
};

export const getCharities = () => async (dispatch) => {
  const res = await fetch("/api/give/");
  if (res.ok) {
    const { charities } = await res.json();
    await dispatch(setCharities(charities));
    console.log(charities);
    return res;
  }
};

const initialState = {};

const charityReducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case SET_CHARITY:
      // newState = Object.assign({}, state);
      // newState.charity = action.payload;

      return { ...action.payload };
    default:
      return state;
  }
};

export default charityReducer;
