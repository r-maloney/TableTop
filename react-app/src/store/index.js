import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import businessReducer from "./business";
import itemReducer from "./item";
import cartReducer from "./cart";
import charitiesReducer from "./charity";

const rootReducer = combineReducers({
  session: sessionReducer,
  businesses: businessReducer,
  item: itemReducer,
  cart: cartReducer,
  charities: charitiesReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
