import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../Modal/Modal";
import Card from "../Card/Card";

import IngredientDetails from "../IngredientsDetails/ingredients-details";

import BurgerIngridientsStyles from "./BurgerIngridientsStyles.module.sass";

//Управление модалкой
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

const BurgerIngridients = (props) => {
  const data = props.data;
  const [current, setCurrent] = React.useState("one");
  const types = data.map((element) => element.type);
  const typesUnique = Array.from(new Set(types));
  const modalControls = useModalControls({ disableOverlayClick: true });

  return (
    <>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`${BurgerIngridientsStyles.tabs} mb-10`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={BurgerIngridientsStyles.wrapper}>
        {typesUnique.map((type, index) => {
          let title = "";
          switch (type) {
            case "bun":
              title = "Булка";
              break;
            case "sauce":
              title = "Соусы";
              break;
            case "main":
              title = "Основы";
              break;
            default:
              title = "Что инопланетное";
          }
          // var indexOfIngridientGlobal;
          return (
            <div
              className={BurgerIngridientsStyles.ingridientsType}
              key={index}
            >
              <h3 className="text text_type_main-medium">{title}</h3>
              <div className={BurgerIngridientsStyles.ingridientsContainer}>
                {data.map((ingridient, index) => {
                  if (ingridient.type === type) {
                    return (
                      <>
                        <div onClick={modalControls.open}>
                          <Card
                            idElem={ingridient.id}
                            checked={true}
                            src={ingridient.image}
                            currency={ingridient.price}
                            cardName={ingridient.name}
                            key={index}
                          />
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden">
        {console.log(data.image)}
        <Modal {...modalControls.modalProps}>
          <IngredientDetails />
        </Modal>
      </div>
    </>
  );
};

export default BurgerIngridients;
