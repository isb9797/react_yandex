import React from "react";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import CardSyles from "./Card.module.sass";
const Card = (props) => {
  return (
    <div className={CardSyles.card + " mt-6 mb-10 pl-4 pr-4"}>
      {props.checked === true ? <div className={CardSyles.checked}>1</div> : ""}
      <img className="mb-1" src={props.src} alt={props.alt} />
      <div className={CardSyles.currency + " mb-1"}>
        <span className="text text_type_digits-default">{props.currency}</span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={CardSyles.cardName}>{props.cardName}</span>
    </div>
  );
};

export default Card;
