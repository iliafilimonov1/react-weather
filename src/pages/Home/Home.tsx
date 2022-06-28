import React from "react";
import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";

interface Props {}

export const Home = (props: Props) => {
  return (
    <section className={s.home}>
      
        <ThisDay />
      
    </section>
  );
};
