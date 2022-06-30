import React from "react";
import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";

interface Props {}

export const Home = (props: Props) => {
  return (
    <>
      <section className={s.flex}>
        <ThisDay />
        <ThisDayInfo />
      </section>
      <section>
        <Days />
      </section>
    </>
  );
};
