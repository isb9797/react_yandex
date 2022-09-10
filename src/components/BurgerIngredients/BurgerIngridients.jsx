import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

import Card from "../Card/Card";
import BurgerIngridientsStyles from "./BurgerIngridientsStyles.module.sass";

const BurgerIngridients = (props) => {
  const data = props.data;
  const [current, setCurrent] = React.useState("one");
  const types = data.map((element) => element.type);
  const typesUnique = Array.from(new Set(types));

  console.dir(typesUnique);
  return (
    <>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div
        className={`${BurgerIngridientsStyles.tabs} mb-10`}
        style={{ display: "flex" }}
      >
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
                        src={ingridient.image}
                        currency={ingridient.price}
                        cardName={ingridient.name}
                        key={index}
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

export default BurgerIngridients;
