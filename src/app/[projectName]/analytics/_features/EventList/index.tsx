"use client";
import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import style from "./EventList.module.scss";
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
      <div className={style.Wrapper}>
        <div className={style.Wrapper_Wrapper2}>
          {data.map((item, index) => {
            const labelList = countEvents(item.labels);
            const isEventAFilter = filter.eventName === item.name;
            const clickHandlerParent = () => {
              if (isEventAFilter) {
                setFilter(() => ({ eventName: "", name: [] }));
              } else {
                console.log("ho");
                setFilter(() => ({
                  eventName: item.name,
                  name: labelList.map((item) => item.name),
                }));
              }
            };
            return (
              <div className={style.EventList} key={item.name}>
                <ListItem
                  onClick={clickHandlerParent}
                  lightBg={isEventAFilter}
                  name={item.name}
                  quantity={item.labels.length}
                />
                {isEventAFilter && (
                  <div className={style.WrapperNested}>
                    {labelList.map((label, index) => {
                      const isLabelAFilter = filter.name.includes(label.name);
                      const clickHandler = () => {
                        if (isEventAFilter) {
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
                        } else {
                          setFilter(() => ({
                            eventName: item.name,
                            name: [label.name],
                          }));
                        }
                      };
                      return (
                        <ListItem
                          onClick={clickHandler}
                          lightBg={isLabelAFilter && isEventAFilter}
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
          })}
        </div>
      </div>
    </BoxContainer>
  );
};
