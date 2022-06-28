import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from "./ThisDay.module.scss";

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <article>
      <div className={s.day__top}>
        <div className={s.day__top__wrapper}>
          <h2 className={s.this__temp}>23°</h2>
          <p className={s.this__day}>Today</p>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.day__bottom}>
        <p>
          Time: <span>10:10 a.m.</span>
        </p>
        <p>
          City: <span>Amsterdam</span>
        </p>
      </div>
    </article>
  );
};
