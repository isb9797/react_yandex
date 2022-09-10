import React from "react";
import "./App.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngridients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

function App() {
  const [current, setCurrent] = React.useState("one");
  const [value, setValue] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <div className="left mr-10">
          <BurgerIngridients data={data} />
        </div>
        <div className="right">
          <BurgerConstructor data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
