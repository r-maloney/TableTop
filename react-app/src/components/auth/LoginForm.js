import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import "./auth.css";
import logo from "../../images/logos/TTLogoNoBackgroundOrange.jpg";

function LoginForm({ setAuthenticated, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(credential, password));
    if (!user.errors) {
      setAuthenticated(true);
      setShowModal(false);
      history.push("/");
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async () => {
    const credential = "demo@aa.io";
    const password = "password";
    await dispatch(login(credential, password));
    setShowModal(false);
    history.push("/");
  };

  //   if (authenticated) {
  //     return <p>logged in</p>;
  //     // return <Redirect to='/' />;
  //   }

  return (
    <div className='login__form'>
      <div className='auth__container'>
        <img src={logo} alt='logo' />
        <form onSubmit={handleSubmit} className='auth__form'>
          <div>
            <ul className='auth__errors-list'>
              {errors.map((error, idx) => (
                <li className='auth__error' key={idx}>
                  {error}
                </li>
              ))}
            </ul>
            <div className='auth__form-group'>
              <label className='auth__label'>Email</label>
              <input
                className='auth__input'
                type='text'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
            <div className='auth__form-group'>
              <label className='auth__label'>Password</label>
              <input
                className='auth__input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className='auth-form__button'
              type='submit'
              onClick={handleSubmit}
            >
              Log In
            </button>
            <button
              className='auth-form__button demo-login__button'
              onClick={demoLogin}
              type='button'
            >
              Login as demo user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
