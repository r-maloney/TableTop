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
            <NavLink to='/shopping-cart' exact={true} activeClassName='active'>
              Shopping Cart
            </NavLink>
            <a onClick={() => setShowCart(!showCart)}>Cart</a>
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
      {/* <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul> */}
    </div>
  );
};

export default Navigation;
