import React, { useState } from "react";
import { signUp } from "../../services/auth";
import "./auth.css";
import logo from "../../images/logos/TTLogoNoBackgroundOrange.jpg";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className='login__form'>
      <div className='auth__container'>
        <img src={logo} alt='logo' />
        <form onSubmit={onSignUp} className='auth__form'>
          {/* <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul> */}
          <div className='auth__form-group'>
            <label className='auth__label'>Email</label>
            <input
              className='auth__input'
              type='text'
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              required
            />
          </div>
          <div className='auth__form-group'>
            <label className='auth__label'>Password</label>
            <input
              className='auth__input'
              type='password'
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              required
            />
          </div>
          <div className='auth__form-group'>
            <label className='auth__label'>Confirm Password</label>
            <input
              className='auth__input'
              type='password'
              value={repeatPassword}
              onChange={(e) => updateRepeatPassword(e.target.value)}
              required
            />
          </div>
          <button className='auth-form__button' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
    // <form onSubmit={onSignUp}>
    //   <div>
    //     <label>User Name</label>
    //     <input
    //       type='text'
    //       name='username'
    //       onChange={updateUsername}
    //       value={username}
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       type='text'
    //       name='email'
    //       onChange={updateEmail}
    //       value={email}
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input
    //       type='password'
    //       name='password'
    //       onChange={updatePassword}
    //       value={password}
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Repeat Password</label>
    //     <input
    //       type='password'
    //       name='repeat_password'
    //       onChange={updateRepeatPassword}
    //       value={repeatPassword}
    //       required={true}
    //     ></input>
    //   </div>
    //   <button type='submit'>Sign Up</button>
    // </form>
  );
};

export default SignUpForm;
