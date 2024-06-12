import React, { FC } from "react";
import { useEvents } from "../../../_context";
import { ListItem } from "@/src/features/ListItem";
import style from "./Event.module.scss";
import { countEvents } from "../../../_context/utils";
import { EventWithLabels } from "@/src/db/data-access/event";

type SingleListProps = {
  event: EventWithLabels;
};

export const Event: FC<SingleListProps> = ({ event: { name, labels } }) => {
  const { currentEvent, toggleEvent, filter, toggleFilter } = useEvents();
  const isSelected = currentEvent === name;

  const countedLabels = countEvents(labels);
  const total = labels.length;

  return (
    <div className={style.EventList}>
      <ListItem
        onClick={() =>
          toggleEvent(
            name,
            countedLabels.map((e) => e.name)
          )
        }
        lightBg={isSelected}
        name={name}
        value={total}
      />
      {isSelected && (
        <div className={`${style.EventList} ${style.EventList__nested}`}>
          {countedLabels.map(({ eventName, name, value }) => {
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
