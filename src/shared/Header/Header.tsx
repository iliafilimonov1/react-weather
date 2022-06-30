import React, { useEffect, useState } from "react";
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
      backgroundColor: 0 ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "0",
      borderRadius: "10px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: 0 ? "#fff" : "#000",
    }),
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
    });
  }, [theme]);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
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
        <Select styles={colourStyles} defaultValue={options[0]} options={options} />
      </div>
    </header>
  );
};
