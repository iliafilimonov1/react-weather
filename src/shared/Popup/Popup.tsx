import React from "react";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";

interface Props {}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: "20° - feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: "765 mmHg - normal",
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: "3 m/s southwest - light breeze",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <h2 className={s.day__temp}>12°</h2>
          <p className={s.day__name}>Today</p>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <p className={s.day__time}>Time: <span>10:10 a.m.</span></p>
          <p className={s.day__city}>City: <span>Amsterdam</span></p>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
