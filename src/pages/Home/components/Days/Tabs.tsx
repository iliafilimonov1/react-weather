import React from "react";

import s from "./Days.module.scss";

interface Props {}

export interface Tab {
  value: string;
}

export const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    { value: "Week" },
    { value: "10 day" },
    { value: "Month" },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <button className={s.tab} key={tab.value}>
            {tab.value}
          </button>
        ))}
      </div>
      <button className={s.cancel}>Cancel</button>
    </div>
  );
};
