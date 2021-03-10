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
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
      <Modal onClose={() => setShowModal(false)}>
        <h1>hello</h1>
      </Modal>
    </>
  );
}

export default AuthModal;
