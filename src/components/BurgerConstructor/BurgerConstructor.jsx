import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/order-details";

//Импорт изображений для верстки конструктора
import Bun from "../../images/constructor/burger component/bun-02.png";
import Sauce from "../../images/constructor/burger component/sauce-03.png";
import Meat from "../../images/constructor/burger component/meat-02.png";
import Mineral from "../../images/constructor/burger component/mineral rings-1.png";

import BurgerConstructorStyles from "./BurgerConstructor.module.sass";

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
///Так как пропсов пока нет, типизацию, считаю не нужной. Как только начну передавать - сразу сделаю)
const BurgerConstructor = () => {
  const modalControls = useModalControls({ disableOverlayClick: true });

  return (
    <div className={BurgerConstructorStyles.constructorContainer}>
      <div className={BurgerConstructorStyles.constructor + " mt-25"}>
        <div className={BurgerConstructorStyles.constructorBurger}>
          <div className={BurgerConstructorStyles.lockElements}>
            <ConstructorElement
              className={BurgerConstructorStyles.lockElement}
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={Bun} //props.img
            />
          </div>
          <div className={BurgerConstructorStyles.reusedElements}>
            <div className={BurgerConstructorStyles.reusedElement}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Соус традиционный галактический"
                price={15}
                thumbnail={Sauce} //props.img
              />
            </div>

            <div className={BurgerConstructorStyles.reusedElement}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Мясо бессмертных моллюсков Protostomia"
                price={1337}
                thumbnail={Meat} //props.img
              />
            </div>

            <div className={BurgerConstructorStyles.reusedElement}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={300}
                thumbnail={Mineral} //props.img
              />
            </div>

            <div className={BurgerConstructorStyles.reusedElement}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={300}
                thumbnail={Mineral} //props.img
              />
            </div>
          </div>
          <div className={BurgerConstructorStyles.lockElements}>
            <ConstructorElement
              className={BurgerConstructorStyles.lockElement}
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={Bun} //props.img
            />
          </div>
        </div>
      </div>

      <div className={BurgerConstructorStyles.constructorFooter}>
        <span
          className={
            BurgerConstructorStyles.totalPrice + " text text_type_digits-medium"
          }
        >
          2352 <CurrencyIcon type="primary" />
        </span>

        <Button onClick={modalControls.open} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

      <div className="hidden">
        <Modal {...modalControls.modalProps}>
          <OrderDetails />
        </Modal>
      </div>
    </div>
  );
};

export default BurgerConstructor;
