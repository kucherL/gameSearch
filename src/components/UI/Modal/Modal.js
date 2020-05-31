import React from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
  <>
    <Backdrop show={props.show} clicked={props.cleanError} />
    <div className="Modal">{props.children}</div>
  </>
);

export default Modal;
