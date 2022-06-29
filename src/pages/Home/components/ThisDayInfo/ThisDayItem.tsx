import React from "react";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";

interface Props {
  item: Item;
}

export const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <span className={s.indicator__name}>{name}</span>
      <span className={s.indicator__value}>{value}</span>
    </div>
  );
};
