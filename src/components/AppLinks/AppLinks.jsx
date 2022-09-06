import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppLinksStyles from './AppLinks.module.sass';

function AppLinks(props) {

  return (
    <li className={`${AppLinksStyles.link} text text_type_main-default pl-5 pr-5 pt-4 pb-4`}>
      {props.children}
      <a className={`ml-2` }  href={props.link}>{props.linkText}</a>
    </li>
  )
}

export default AppLinks;