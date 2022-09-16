import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

ModalOverlay.propTypes = {
  ingredient: PropTypes.shape({
    handleCloseOverlay: PropTypes.func.isRequired,
  }),
};

export default ModalOverlay;
