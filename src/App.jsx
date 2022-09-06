import React from 'react';
import './App.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from './components/AppHeader/AppHeader';

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
          {/* Ингридиенты (компонент)*/}
        </div>
        <div className="right">
          {/* Конструктор (компонент) */}
        </div>

      </main>
    </div>
  );
}

export default App;
