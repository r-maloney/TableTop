import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

function AuthModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button className='login__button' onClick={() => setShowModal(true)}> */}
      <button className='login__button' onClick={() => setShowModal(true)}>
        Login
      </button>
      {showModal && (
        <>
          <h1>Outside modal</h1>
          <Modal onClose={() => setShowModal(false)}>
            <h1>Hello, does this show up? </h1>
            {/* <LoginForm /> */}
          </Modal>
        </>
      )}
    </>
  );
}

export default AuthModal;
