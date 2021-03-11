import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/auth/SignUpForm";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Splash from "./components/Splash";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Explore from "./components/Explore/Explore";
import Give from "./components/Give/Give";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navigation
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Switch>
        <ProtectedRoute path='/' exact={true} authenticated={authenticated}>
          <Splash
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
        <ProtectedRoute
          path='/explore'
          exact={true}
          authenticated={authenticated}
        >
          <Explore />
        </ProtectedRoute>
        <ProtectedRoute path='/give' exact={true} authenticated={authenticated}>
          <Give />
        </ProtectedRoute>
        <ProtectedRoute
          path='/shopping-cart'
          exact={true}
          authenticated={authenticated}
        >
          <ShoppingCart />
        </ProtectedRoute>
        <Route>Page Not Found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
