import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { data } from "../../utils/data";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientDetailsPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

import IngredientDetailsStyles from "./ingredient-details.module.sass";

const IngredientDetails = (props) => {
  const ingredient = props.ingredient;
  return (
    <div className={IngredientDetailsStyles.detailsContainer}>
      <h3 className="text text_type_main-large mt-40">Детали ингридиента</h3>

      <img src={ingredient.imageLarge} alt={ingredient.cardName} />

      <span className="text text_type_main-medium mt-4 mb-8">
        {ingredient.cardName}
      </span>

      <div className={IngredientDetailsStyles.ingridientDetails + " mb-15"}>
        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </span>
        </div>

        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </span>
        </div>

        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </span>
        </div>

        <div className={IngredientDetailsStyles.detail}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.arrayOf(IngredientDetailsPropTypes.isRequired),
};

export default IngredientDetails;
