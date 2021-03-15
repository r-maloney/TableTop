const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (credential, password) => async (dispatch) => {
  console.log("check", credential, password);
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const user = await response.json();
  console.log(user);
  if (!user.errors) {
    console.log("*********************we did it");
    dispatch(setUser(user));
  } else {
    console.log(user.errors);
  }
  return user;
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const user = await res.json();
  if (res.ok) {
    dispatch(setUser(user));
  }
  return user;
};

export const authenticate = () => async (dispatch) => {
  try {
    const response = await fetch("/api/auth/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    if (!user.errors) {
      dispatch(setUser(user));
    }
    return user;
  } catch (e) {
    return e;
  }
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  dispatch(setUser(response.data.user));
  return response;
};

export const userCharity = (user, id) => async (dispatch) => {
  // user.charity_id = id;
  // const options = {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "Application/json",
  //   },
  //   body: JSON.stringify(user),
  // };
  // const res = await fetch(`/api/user/${user.id}`, options);
  // dispatch(setUser(user));
  // return user;
  const response = await fetch(`/api/give/${id}`);
  const charity = await response.json();
  user.charity = charity;
  dispatch(setUser(user));
  return user;
};

export const userCart = (user, cart) => async (dispatch) => {
  user.cart = cart;
  dispatch(setUser(user));
  return user;
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    dispatch(removeUser());
  }
  return await response.json();
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
