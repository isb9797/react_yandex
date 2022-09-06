import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'



import headerStyles from './AppHeader.module.sass';
import AppLinks from '../AppLinks/AppLinks';

const AppHeader = () => {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.container}>
        <ul className={headerStyles.nav}>
          <AppLinks style={{
            'color': '#fff',
            'fill': '#fff'
        }} link={'#'}  linkText={'Конструктор'}>
          <BurgerIcon type="primary" />
        </AppLinks>
        <AppLinks link={'#'} linkText={'Лента заказов'}>
          <ListIcon type="primary" />
        </AppLinks>
      </ul>
      
        <Logo className={headerStyles.logo} />
      
      <ul className={headerStyles.nav}>
        <AppLinks link={'#'}  linkText={'Личный кабинет'}>
            <ProfileIcon type="primary" />
        </AppLinks>
      </ul>
      </nav>
      
    </header>
  )
}

export default AppHeader;