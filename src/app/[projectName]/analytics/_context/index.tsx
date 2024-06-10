"use client";
import React, { FC, useContext, ReactNode, useState } from "react";

type ContextType = {
  data: ContextData;
  filteredData: {
    id: string;
    createdAt: Date;
    eventName: string;
    name: string;
  }[];
  filter: Filter;
  setFilter: (d: any) => void;
};

type Filter = {
  name: string[];
  eventName: string;
};
type ContextData = {
  name: string;
  labels: {
    id: string;
    createdAt: Date;
    eventName: string;
    name: string;
  }[];
}[];

const Context = React.createContext<ContextType | null>(null);

export const useEvents = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error("useUser context is undefined");
  } else {
    return context;
  }
};

export const EventsProvider: FC<{
  children?: ReactNode;
  EventsArr: ContextData;
}> = ({ children, EventsArr }) => {
  const [filter, setFilter] = useState({
    name: [EventsArr[0].labels[0].name],
    eventName: EventsArr[0].labels[0].eventName,
  });

  const event = EventsArr.find((e) => e.name === filter.eventName) || {
    labels: [],
  };

  const filteredData = event.labels.filter((event) =>
    filter.name.includes(event.name)
  );

  console.log(filter);

  return (
    <Context.Provider
      value={{
        filter,
        setFilter,
        data: EventsArr,
        filteredData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
