"use client";
import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import { ItemList, Item } from "@/src/features/ItemList";
import style from "@/src/features/ItemList/ItemList.module.scss";
import style2 from "./EventList.module.css";
import { ListItem } from "@/src/features/ItemList/components/ListItem";
import { countEvents } from "../Analytics/utils";
import { useEvents } from "../../_context";
type EventListProps = {
  title: string;
};

export const EventList: FC<EventListProps> = ({ title }) => {
  const { data, filter, setFilter } = useEvents();

  return (
    <BoxContainer title={title}>
      {data.map((item, index) => {
        const labelList = countEvents(item.labels);
        const isEventAFilter = filter.eventName === item.name;
        return (
          <div className={style.List} key={item.name}>
            <ListItem
              lightBg={isEventAFilter}
              name={item.name}
              quantity={item.labels.length}
            />
            {labelList.map((label, index) => {
              const isLabelAFilter = filter.name.includes(label.name);
              const clickHandler = () => {
                console.log("hi");
                if (isLabelAFilter) {
                  setFilter((prev: any) => ({
                    name: prev.name.filter(
                      (name: string) => name !== label.name
                    ),
                    eventName: item.name,
                  }));
                } else {
                  setFilter((prev: any) => ({
                    name: [...prev.name, label.name],
                    eventName: item.name,
                  }));
                }
              };
              return (
                <ListItem
                  onClick={clickHandler}
                  lightBg={isLabelAFilter && isEventAFilter}
                  isNested
                  key={`${label.eventName} ${label.name}`}
                  name={label.name}
                  quantity={label.value}
                />
              );
            })}
          </div>
        );
      })}
    </BoxContainer>
  );
};
