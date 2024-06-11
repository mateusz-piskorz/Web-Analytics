"use client";
import React, { FC, useContext, ReactNode, useState } from "react";
import { countEvents, CountedEvents } from "../_features/EventList/utils";
import { EventWithLabels } from "@/src/db/data-access/event";

type ContextType = {
  filteredData: EventWithLabels["labels"];
  data: {
    name: string;
    labels: CountedEvents;
  }[];
  currentEvent: string;
  toggleEvent: (eventName: string) => void;
  filter: string[];
  toggleFilter: (label: string) => void;
};

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
  EventsArr: EventWithLabels[];
}> = ({ children, EventsArr }) => {
  const newData = EventsArr.map((e) => {
    return { name: e.name, labels: countEvents(e.labels) };
  });
  const [currentEvent, setCurrentEvent] = useState(newData[0].name);
  const [filter, setFilter] = useState(newData[0].labels.map((e) => e.name));

  const toggleEvent = (eventName: string) => {
    if (currentEvent === eventName) {
      setCurrentEvent("");
      setFilter([]);
    } else {
      setCurrentEvent(eventName);
      setFilter(
        newData.find((e) => e.name === eventName)!.labels.map((e) => e.name)
      );
    }
  };

  const toggleFilter = (label: string) => {
    const labelInFilter = filter.find((e) => e === label);
    if (labelInFilter) {
      setFilter((prev) => prev.filter((e) => e !== label));
      filter.length === 1 && setCurrentEvent("");
    } else {
      setFilter((prev) => [...prev, label]);
    }
  };

  const currentEventData = EventsArr.find((e) => e.name === currentEvent) || {
    labels: [],
  };

  const filteredData = currentEventData.labels.filter(({ name }) =>
    filter.includes(name)
  );

  return (
    <Context.Provider
      value={{
        toggleEvent,
        currentEvent,
        filteredData,
        filter,
        toggleFilter,
        data: newData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
