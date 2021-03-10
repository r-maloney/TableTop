import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import logo from "../../images/logos/TTLogo.png";
import AuthModal from "../auth/AuthModal";
import "./navigation.css";

const Navigation = ({ authenticated, setAuthenticated }) => {
  return (
    <div className='nav__container'>
      <div className='nav__logo-container'>
        <img className='nav__logo' src={logo} alt='TT logo'></img>
        <h2>TABLETOP</h2>
      </div>
      <div className='nav__browse'>
        {authenticated && (
          <ul>
            <li>
              <NavLink to='/explore' exact={true} activeClassName='active'>
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to='/give' exact={true} activeClassName='active'>
                Give
              </NavLink>
            </li>
            <NavLink to='/cart' exact={true} activeClassName='active'>
              Shopping Cart
            </NavLink>
          </ul>
        )}
      </div>
      <div className='nav__links'>
        <ul>
          <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
              <AuthModal />
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
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
