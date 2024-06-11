"use client";
import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import style from "./EventList.module.scss";
import { useEvents } from "../../_context";
import { Event } from "./components/Event";

type EventListProps = {
  title: string;
};

export const EventList: FC<EventListProps> = ({ title }) => {
  const { data } = useEvents();

  return (
    <BoxContainer title={title}>
      <div className={style.List}>
        {data.map((event, index) => {
          return <Event event={event} key={index} />;
        })}
      </div>
    </BoxContainer>
  );
};
