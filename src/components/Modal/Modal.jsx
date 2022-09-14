import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import FocusTrap from "focus-trap-react";
import { data } from "../../utils/data";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalStyles from "./Modal.module.sass";

const modalsElement = document.querySelector("#modal");

const ModalOverlay = (props) => {
  React.useEffect(() => {
    const handleEsc = (ev) => {
      ev.key === "Escape" && props.requestClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  });
  function handleCloseOverlay() {
    if (props.disableOverlayClick) {
      return;
    }
    props.requestClose && props.requestClose();
  }
  return (
    props.isOpen &&
    ReactDOM.createPortal(
      <div className={ModalStyles.modal__root}>
        <div
          className={ModalStyles.modal__overlay}
          onClick={handleCloseOverlay}
        ></div>

        <div className={ModalStyles.modal__content}>
          {!props.disableCloseButton && (
            <div
              className={ModalStyles.modal__close}
              onClick={() => props.requestClose && props.requestClose()}
            >
              <CloseIcon type="primary" />
            </div>
          )}

          {props.children}
        </div>
      </div>,
      modalsElement
    )
  );
};

export default ModalOverlay;
