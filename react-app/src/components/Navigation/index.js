import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import logo from "../../images/logos/TTLogo.png";
import LoginModal from "../auth/LoginModal";
import SignUpModal from "../auth/SignUpModal";
import "./navigation.css";

const Navigation = ({
  authenticated,
  setAuthenticated,
  showCart,
  setShowCart,
}) => {
  return (
    <div className='nav__container'>
      <NavLink to='/' exact={true} activeClassName='active'>
        <div className='nav__logo-container'>
          <img className='nav__logo' src={logo} alt='TT logo'></img>
          <h2>TABLETOP</h2>
        </div>
      </NavLink>
      <div className='nav__browse'>
        {authenticated && (
          <>
            <NavLink to='/explore' exact={true} activeClassName='active'>
              Explore
            </NavLink>
            <NavLink to='/give' exact={true} activeClassName='active'>
              Give
            </NavLink>
            <button onClick={() => setShowCart(!showCart)}>Cart</button>
          </>
        )}
      </div>
      <div className='nav__links'>
        {authenticated && (
          <div>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        )}
        {!authenticated && (
          <>
            <div>
              <LoginModal
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </div>
            <div>
              <SignUpModal
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
