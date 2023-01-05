import React, { useEffect, useState } from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
// import ModalOverlay from "../Modal/Modal";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

//redux
import { getIngredients } from "../../services/reducers/BurgerIngredients";
import { useDispatch, useSelector } from 'react-redux';
import { getFromApi } from "../../services/acyncActions/BurgerIngredients"
//react-dnd
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


// import { getDataFromApi } from "../../utils/data-api";

import AppStyles from "./App.module.sass";

const App = () => {
  //Хуки
  // const [ingridientsList, setIngridients] = useState([]);
  // const [value, setValue] = React.useState("value");

  const inputRef = React.useRef(null);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getFromApi());
  }, [dispatch]);






  return (
    <div className={AppStyles.App}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={AppStyles.main}>
          <div className={AppStyles.left + " mr-10"}>
            <BurgerIngridients />
          </div>
          <div className={AppStyles.right}>
            <BurgerConstructor />
          </div>
        </main>
      </DndProvider>
    </div>
  );
};

export default App;
