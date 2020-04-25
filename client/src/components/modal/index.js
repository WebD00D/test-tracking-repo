import React from "react";
import "./modal-style.css";

const Modal = ({ children, closeModal }) => (
  <div className="modal-wrapper">
    <div className="modal-body">
      <div className="close" onClick={closeModal}>
        <i className="material-icons">close</i>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
