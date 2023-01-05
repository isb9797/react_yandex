import React, { useState, useEffect } from "react";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientsDetails/ingredients-details";
import ModalOverlay from "../ModalOverlay/modal-overlay";

import { IngredientDetailsPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

import CardSyles from "./Card.module.sass";

//react-dnd
import { useDrag } from 'react-dnd'

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
      disableOverlayClick: false,
    },
  };
}

const Card = (props) => {
  const modalControls = useModalControls();
  const [currentIngredient, setCurrentIngredient] = useState(props);
  //react-dnd
  const [{ isDragging }, drag] = useDrag(() => ({
    // type: ItemTypes.BOX,
    item: 'Date',
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;





  return (
    <>
      <div
        onClick={modalControls.open}
        className={CardSyles.card + " mt-6 mb-10 pl-4 pr-4"}
      >
        {props.checked === false ? ( // Заменить на стейт при перетаскивании
          <div className={CardSyles.checked}>1</div>
        ) : (
          ""
        )}
        <img className="mb-1" src={props.src} alt={props.name} />
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

Card.propTypes = IngredientDetailsPropTypes.isRequired;

export default Card;
