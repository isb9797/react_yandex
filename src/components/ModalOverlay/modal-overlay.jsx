import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { ModalOverlayPropTypes } from "../../utils/prop-types";

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

ModalOverlay.propTypes = ModalOverlayPropTypes.isRequired;

export default ModalOverlay;
