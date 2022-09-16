import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

import Card from "../Card/Card";

import IngredientDetails from "../IngredientsDetails/ingredients-details";
import BurgerIngridientsStyles from "./BurgerIngridientsStyles.module.sass";

import PropTypes from "prop-types";
import { ingridientPropTypes } from "../../utils/prop-types";

const BurgerIngridients = (props) => {
  const data = props.data;
  const [current, setCurrent] = React.useState("one");
  const types = data.map((element) => element.type);
  const typesUnique = Array.from(new Set(types));

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
                      <Card
                        idElem={ingridient._id}
                        checked={true}
                        src={ingridient.image}
                        currency={ingridient.price}
                        cardName={ingridient.name}
                        key={index}
                        carbohydrates={ingridient.carbohydrates}
                        calories={ingridient.calories}
                        fat={ingridient.fat}
                        proteins={ingridient.proteins}
                        imageLarge={ingridient.image_large}
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(ingridientPropTypes.isRequired).isRequired,
};

export default BurgerIngridients;
