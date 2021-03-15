import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Splash from "./components/Splash";
import Navigation from "./components/Navigation";
import Explore from "./components/Explore/Explore";
import Give from "./components/Give/Give";
import BusinessProfile from "./components/Explore/BusinessProfile";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ThankYou from "./components/ThankYou";
import { getCart, createCart } from "./store/cart";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const [orderId, setOrderId] = useState();

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
        const orderId = await dispatch(getCart(user));
        setOrderId(orderId);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Navigation
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Switch>
        <Route path='/' exact={true} authenticated={authenticated}>
          <Splash
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path='/explore' exact={true} authenticated={authenticated}>
          <Explore />
        </Route>
        <Route path='/give' exact={true} authenticated={authenticated}>
          <Give />
        </Route>
        <Route path='/shopping-cart' exact={true} authenticated={authenticated}>
          <ShoppingCart />
        </Route>
        <Route
          path='/explore/:id(\d+)'
          exact={true}
          authenticated={authenticated}
        >
          <BusinessProfile orderId={orderId} />
        </Route>
        <Route path='/thank-you'>
          <ThankYou />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
}

export default App;
