import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from "./ThisDay.module.scss";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <article>
      <div className={s.day__top}>
        <div className={s.day__top__wrapper}>
          <h2 className={s.this__temp}>{Math.floor(weather.main.temp)}°</h2>
          <p className={s.this__day}>Today</p>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.day__bottom}>
        <p>
          Time: <span>10:10 a.m.</span>
        </p>
        <p>
          City: <span>Paris</span>
        </p>
      </div>
    </article>
  );
};
