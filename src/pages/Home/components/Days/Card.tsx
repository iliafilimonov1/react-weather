import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";

import s from "./Days.module.scss";

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <h3 className={s.day}>{day.day}</h3>
      <span className={s.day__info}>{day.day_info}</span>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <span className={s.temp__day}>{day.temp_day}</span>
      <span className={s.temp__night}>{day.temp_day}</span>
      <span className={s.info}>{day.info}</span>
    </div>
  );
};
