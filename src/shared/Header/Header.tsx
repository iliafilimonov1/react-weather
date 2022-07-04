import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";

import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";

interface Props {}

export const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "amsterdam", label: "Amsterdam" },
    { value: "berlin", label: "Berlin" },
    { value: "budapest", label: "Budapest" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "0",
      borderRadius: "10px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <a href="http://weatherstack.com" className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </a>
        <h1 className={s.title}>React weather</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          styles={colourStyles}
          defaultValue={options[0]}
          options={options}
        />
      </div>
    </header>
  );
};
