import React, { useState, useEffect } from "react";

import OverlayStyles from "./modal-overlay.module.sass";
const ModalOverlay = (props) => {
  return (
    <>
      <div
        className={OverlayStyles.modal__overlay}
        onClick={props.handleCloseOverlay}
      ></div>
    </>
  );
};

export default ModalOverlay;
