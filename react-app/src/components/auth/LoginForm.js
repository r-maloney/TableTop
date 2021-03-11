import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import "../AuthFormModal/AuthForm.css";
import { login } from "../../store/session";
import "./auth.css";
import logo from "../../images/logos/TTLogoNoBackgroundOrange.jpg";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, "hit");
    setErrors([]);
    return dispatch(login({ credential, password })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  const demoLogin = () => {
    return dispatch(
      login({
        credential: "demo@aa.io",
        password: "password",
      })
    ).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

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

// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import { login } from "../../services/auth";

// const LoginForm = ({ authenticated, setAuthenticated, setShowModal }) => {
//   console.log("auth", authenticated);
//   const [errors, setErrors] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onLogin = async (e) => {
//     e.preventDefault();
//     console.log("hit onlogin");
//     setShowModal(false);
//     const user = await login(email, password);
//     if (!user.errors) {
//       setAuthenticated(true);
//       console.log("set auth true");
//     } else {
//       setErrors(user.errors);
//       console.log("set auth error");
//     }
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   if (authenticated) {
//     return <p>logged in</p>;
//     // return <Redirect to='/' />;
//   }

//   return (
//     <form onSubmit={() => onLogin}>
//       <div>
//         {errors.map((error) => (
//           <div>{error}</div>
//         ))}
//       </div>
//       <div>
//         <label htmlFor='email'>Email</label>
//         <input
//           name='email'
//           type='text'
//           placeholder='Email'
//           value={email}
//           onChange={updateEmail}
//         />
//       </div>
//       <div>
//         <label htmlFor='password'>Password</label>
//         <input
//           name='password'
//           type='password'
//           placeholder='Password'
//           value={password}
//           onChange={updatePassword}
//         />
//         <button type='submit'>Login</button>
//         {/* <button onClick={() => console.log(password, email)}>Login</button> */}
//       </div>
//     </form>
//   );
// };

// export default LoginForm;
