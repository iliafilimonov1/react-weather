import React from "react";
import { Card } from "../Days/Card";

import s from "./Days.module.scss";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Today",
      day_info: "20 aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Tomorrow",
      day_info: "21 aug",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Small rain and sunshine",
    },
    {
      day: "Wed",
      day_info: "22 aug",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Small rain",
    },
    {
      day: "Th",
      day_info: "23 aug",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Fr",
      day_info: "24 aug",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Small rain and sunshine",
    },
    {
      day: "Sat",
      day_info: "25 aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Sun",
      day_info: "28 aug",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
  ];
  return (
    <div className={s.days}>
      {days.map((day: Day) => (
        <Card day={day} key={day.day} />
      ))}
    </div>
  );
};
