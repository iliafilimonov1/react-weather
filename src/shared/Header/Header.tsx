import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: "amsterdam", label: "Amsterdam" },
    { value: "berlin", label: "Berlin" },
    { value: "budapest", label: "Budapest" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      borderRadius: "10px",
      border: "0",
      cursor: "pointer",
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <a href="http://weatherstack.com" className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </a>
        <h1 className={s.title}>React weather</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select styles={colourStyles} defaultValue={options[0]} options={options} />
      </div>
    </header>
  );
};
