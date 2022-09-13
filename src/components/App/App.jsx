import React, { useEffect, useState } from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
// import ModalOverlay from "../Modal/Modal";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

import { getDataFromApi } from "../../utils/data-api";

import AppStyles from "./App.module.sass";

const App = () => {
  //Хуки
  const [ingridientsList, setIngridients] = useState([]);

  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);

  useEffect(() => {
    getDataFromApi()
      .then(setIngridients)
      .catch(() => {
        alert("Произошла ошибка :(");
      })
      .finally(() => {
        console.log("Загрузка прошла успешно");
        console.dir(ingridientsList);
      });
  }, []);

  return (
    <div className={AppStyles.App}>
      <AppHeader />
      <main className={AppStyles.main}>
        <div className={AppStyles.left + " mr-10"}>
          <BurgerIngridients data={ingridientsList} />
        </div>
        <div className={AppStyles.right}>
          <BurgerConstructor data={ingridientsList} />
        </div>
      </main>
    </div>
  );
};

export default App;
