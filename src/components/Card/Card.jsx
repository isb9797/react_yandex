import React, { useState, useEffect } from "react";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientsDetails/ingredients-details";

import CardSyles from "./Card.module.sass";

function useModalControls({ disableCloseButton, disableOverlayClick } = {}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal(requester) {
    setIsModalOpen(false);
  }

  return {
    open: handleOpenModal,
    close: handleCloseModal,
    modalProps: {
      isOpen: isModalOpen,
      requestClose: handleCloseModal,
      disableCloseButton,
      disableOverlayClick,
    },
  };
}

const Card = (props) => {
  const modalControls = useModalControls({ disableOverlayClick: true });
  const [currentIngredient, setCurrentIngredient] = useState(props);

  return (
    <>
      <div
        onClick={modalControls.open}
        className={CardSyles.card + " mt-6 mb-10 pl-4 pr-4"}
      >
        {props.checked === true ? (
          <div className={CardSyles.checked}>1</div>
        ) : (
          ""
        )}
        <img className="mb-1" src={props.src} alt={props.alt} />
        <div className={CardSyles.currency + " mb-1"}>
          <span className="text text_type_digits-default">
            {props.currency}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <span className={CardSyles.cardName}>{props.cardName}</span>
      </div>

      <div className="hidden">
        <Modal {...modalControls.modalProps}>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      </div>
    </>
  );
};

export default Card;
