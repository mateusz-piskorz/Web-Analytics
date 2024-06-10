"use client";
import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import style from "./EventList.module.scss";
import { useEvents } from "../../_context";
import { SingleList } from "./components/SingleList";

type EventListProps = {
  title: string;
};

export const EventList: FC<EventListProps> = ({ title }) => {
  const { data } = useEvents();
  console.log(data);
  return (
    <BoxContainer title={title}>
      <div className={style.Wrapper}>
        <div className={style.Wrapper_Wrapper2}>
          {data.map((event, index) => {
            return <SingleList event={event} key={index} />;
          })}
        </div>
      </div>
    </BoxContainer>
  );
};
