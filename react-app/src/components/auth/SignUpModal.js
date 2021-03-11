import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

function SignUpModal({ authenticated, setAuthenticated }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button className='login__button' onClick={() => setShowModal(true)}> */}
      <button className='login__button' onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>
            <SignUpForm
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

export default SignUpModal;
