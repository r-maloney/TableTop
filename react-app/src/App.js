import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import { useSelector } from "react-redux";
import Splash from "./components/Splash";
import Navigation from "./components/Navigation";
import Explore from "./components/Explore/Explore";
import Give from "./components/Give/Give";
import BusinessProfile from "./components/Explore/BusinessProfile";
import ThankYou from "./components/Cart/ThankYou";
import Cart from "./components/Cart/Cart";
import Map from "./components/Map/Map";
import { getCart } from "./store/cart";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [orderId, setOrderId] = useState();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
        await dispatch(getCart(user));
        console.log(user.id);
        setOrderId(user.id);
      }
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (cart.items) setShowCart(true);
  }, [cart]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Navigation
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Switch>
        <Route path='/map'>
          <Map />
        </Route>
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
