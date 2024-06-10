"use client";
import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import { ItemList, Item } from "@/src/features/ItemList";
import style from "@/src/features/ItemList/ItemList.module.scss";
import { ListItem } from "@/src/features/ItemList/components/ListItem";
import { countEvents } from "../Analytics/utils";
import { useEvents } from "../../_context";
type EventListProps = {
  title: string;
};

export const EventList: FC<EventListProps> = ({ title }) => {
  const { data, filter, setFilter } = useEvents();
  console.log(filter);
  return (
    <BoxContainer title={title}>
      <div className={style.List}>
        {data.map((item, index) => {
          const labelList = countEvents(item.labels);
          const isEventAFilter = filter.eventName === item.name;
          return (
            <>
              <ListItem
                lightBg={isEventAFilter}
                key={index}
                name={item.name}
                quantity={item.labels.length}
              />
              {labelList.map((label, index) => {
                const isLabelAFilter = filter.name.includes(label.name);
                return (
                  <ListItem
                    lightBg={isLabelAFilter && isEventAFilter}
                    isNested
                    key={index}
                    name={label.name}
                    quantity={label.value}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </BoxContainer>
  );
};
