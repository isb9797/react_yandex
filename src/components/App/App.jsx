import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
// import ModalOverlay from "../Modal/Modal";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

import AppStyles from "./App.module.sass";

// Послание Ревьюеру)
//Если Вы читаете данные строки, значит, я не успел внести некоторые правки по step1
//Я помню о них и ко второй итерации step2 обязательно всё поправлю

const App = () => {
  const [current, setCurrent] = React.useState("one");
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={AppStyles.App}>
      <AppHeader />
      <main className={AppStyles.main}>
        <div className={AppStyles.left + " mr-10"}>
          <BurgerIngridients data={data} />
        </div>
        <div className={AppStyles.right}>
          <BurgerConstructor data={data} />
        </div>
      </main>
    </div>
  );
};

export default App;
