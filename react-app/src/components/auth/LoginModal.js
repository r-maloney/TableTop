import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

function LoginModal({ authenticated, setAuthenticated }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button className='login__button' onClick={() => setShowModal(true)}> */}
      <button className='login__button' onClick={() => setShowModal(true)}>
        Login
      </button>
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setShowModal={setShowModal}
            />
          </Modal>
        </>
      )}
    </>
  );
}

export default LoginModal;
