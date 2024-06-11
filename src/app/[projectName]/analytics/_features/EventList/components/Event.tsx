import React, { FC } from "react";
import { useEvents } from "../../../_context";
import { ListItem } from "@/src/features/ListItem";
import style from "./Event.module.scss";

type SingleListProps = {
  event: {
    name: string;
    labels: {
      name: string;
      eventName: string;
      value: number;
    }[];
  };
};

export const Event: FC<SingleListProps> = ({ event: { name, labels } }) => {
  const { currentEvent, toggleEvent, filter, toggleFilter } = useEvents();
  const isSelected = currentEvent === name;

  return (
    <div className={style.EventList}>
      <ListItem
        onClick={() => toggleEvent(name)}
        lightBg={isSelected}
        name={name}
        value={labels.length}
      />
      {isSelected && (
        <div className={`${style.EventList} ${style.EventList__nested}`}>
          {labels.map(({ eventName, name, value }) => {
            return (
              <ListItem
                onClick={() => toggleFilter(name)}
                lightBg={filter.includes(name)}
                key={`${eventName}-${name}`}
                name={name}
                value={value}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
