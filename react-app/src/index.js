import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/Modal";

function Root() {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
