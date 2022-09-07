import React from 'react';
import './App.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngridients from './components/BurgerIngredients/BurgerIngridients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';

function App() {
  const [current, setCurrent] = React.useState('one');
  const [value, setValue] = React.useState('value')
  const inputRef = React.useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }




  return (
    <div className="App">
     <AppHeader />
      <main className="main">
        <div className="left">
          <BurgerIngridients />
        </div>
        <div className="right">
          <BurgerConstructor/>
        </div>

      </main>
    </div>
  );
}

export default App;
