import React, { FC } from "react";
import { useEvents } from "../../../_context";
import { ListItem } from "@/src/features/ListItem";
import style from "./Event.module.scss";
import { Data } from "../../../_context";
import { splitDataByDate } from "@/src/utils";
import { PERIODS_AGO } from "@/src/constants";
import { countEvents } from "../../../_context/utils";
import { EventWithLabels } from "@/src/db/data-access/event";

type SingleListProps = {
  event: EventWithLabels;
};

export const Event: FC<SingleListProps> = ({ event: { name, labels } }) => {
  const { currentEvent, toggleEvent, filter, toggleFilter, period } =
    useEvents();
  const isSelected = currentEvent === name;

  const { newestData: newestLabels } = splitDataByDate(
    labels,
    PERIODS_AGO[period][0]
  );

  const labels2 = countEvents(newestLabels);
  const total = newestLabels.length;

  return (
    <div className={style.EventList}>
      <ListItem
        onClick={() =>
          toggleEvent(
            name,
            labels2.map((e) => e.name)
          )
        }
        lightBg={isSelected}
        name={name}
        value={total}
      />
      {isSelected && (
        <div className={`${style.EventList} ${style.EventList__nested}`}>
          {labels2.map(({ eventName, name, value }) => {
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
