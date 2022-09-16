import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { data } from "../../utils/data";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import OrderDetailsStyles from "./order-details.module.sass";

import Done from "../../images/constructor/done.png";
//Так как пропсов пока нет, типизацию, считаю не нужной. Как только начну передавать - сразу сделаю)
const OrderDetails = () => {
  return (
    <div className={OrderDetailsStyles.container}>
      <span className="text text_type_digits-large mt-20">034382</span>
      <span className="text text_type_main-medium mt-8 mb-15">
        идентификатор заказа
      </span>
      <div className={OrderDetailsStyles.button}></div>
      <img src={Done} className="mb-15" alt="done" />
      <span className="text text_type_main-default">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

//Так как пропсов пока нет, типизацию, считаю не нужной. Как только начну передавать - сразу сделаю)

export default OrderDetails;
