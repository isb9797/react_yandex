import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { LinksPropTypes } from "../../utils/prop-types";

import AppLinksStyles from "./AppLinks.module.sass";

function AppLinks(linkData) {
  return (
    <li
      className={`${AppLinksStyles.link} text text_type_main-default pl-5 pr-5 pt-4 pb-4`}
    >
      {linkData.children}
      <a className={`ml-2`} href={linkData.link}>
        {linkData.linkText}
      </a>
    </li>
  );
}

AppLinks.propTypes = LinksPropTypes.isRequired;

export default AppLinks;
