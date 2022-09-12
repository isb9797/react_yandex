import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { data } from "../../utils/data";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Bun from "../../images/constructor/burger component/bun-02.png"; //Временно

import IngredientDetailsStyles from "./ingredient-details.module.sass";

const IngredientDetails = (props) => {
  return (
    <div className={IngredientDetailsStyles.detailsContainer}>
      <h3 className="text text_type_main-large mt-40">Детали ингридиента</h3>

      <img src={Bun} alt="" />

      <span className="text text_type_main-medium mt-4 mb-8">
        Краторная булка
      </span>

      <div className={IngredientDetailsStyles.ingridientDetails + " mb-15"}>
        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            244,4
          </span>
        </div>

        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            12,4
          </span>
        </div>

        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            17,2
          </span>
        </div>

        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            10,2
          </span>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
