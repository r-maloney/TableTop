import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className='nav__logo'>
          <NavLink exact to='/'>
            Logo
          </NavLink>
        </div>
        <div className='nav__space'></div>
        <div className='nav__links'>
          <NavLink exact to='/'>
            Logo
          </NavLink>
          <NavLink exact to='/'>
            Logo
          </NavLink>
          <NavLink exact to='/'>
            Logo
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
