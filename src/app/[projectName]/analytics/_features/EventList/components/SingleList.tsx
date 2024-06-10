import React, { FC, useState } from "react";
import { countEvents } from "../utils";
import { useEvents } from "../../../_context";
import { ListItem } from "@/src/features/ListItem";
import style from "./SingleList.module.scss";

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

export const SingleList: FC<SingleListProps> = ({ event }) => {
  const { currentEvent, labelsFilter, toggleEvent, toggleLabelFilter } =
    useEvents();

  return (
    <div className={style.EventList} key={event.name}>
      <ListItem
        onClick={() => toggleEvent(event.name)}
        lightBg={currentEvent === event.name}
        name={event.name}
        quantity={event.labels.length}
      />
      {currentEvent === event.name && (
        <div className={style.WrapperNested}>
          {event.labels.map((label, index) => {
            const isLabelAFilter = labelsFilter.includes(label.name);
            const clickHandler = () => {
              toggleLabelFilter(label.name);
            };
            return (
              <ListItem
                onClick={clickHandler}
                lightBg={isLabelAFilter}
                key={`${label.eventName} ${label.name}`}
                name={label.name}
                quantity={label.value}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
