"use client";
import React, { FC, useContext, ReactNode, useState } from "react";
import { countEvents, CountedEvents } from "./utils";
import { EventWithLabels } from "@/src/db/data-access/event";
import { Period } from "@/src/types";

export type Data = {
  name: string;
  total: number;
  labels: CountedEvents;
};

type ContextType = {
  filteredData: EventWithLabels["labels"];
  data: EventWithLabels[];
  currentEvent: string;
  toggleEvent: (eventName: string, labels: string[]) => void;
  filter: string[];
  toggleFilter: (label: string) => void;
  period: Period;
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
  eventsArr: EventWithLabels[];
  period: Period;
}> = ({ children, eventsArr, period }) => {
  const defaultEvent = eventsArr.find((e) => e.labels.length > 0);
  const [currentEvent, setCurrentEvent] = useState(defaultEvent?.name || "");
  const [filter, setFilter] = useState(
    defaultEvent?.labels.map((e) => e.name) || []
  );

  const currentEventData = eventsArr.find((e) => e.name === currentEvent) || {
    labels: [],
  };

  const filteredData = currentEventData.labels.filter(({ name }) =>
    filter.includes(name)
  );

  const toggleEvent = (eventName: string, labels: string[]) => {
    if (currentEvent === eventName) {
      setCurrentEvent("");
      setFilter([]);
    } else {
      setCurrentEvent(eventName);
      setFilter(labels);
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

  return (
    <Context.Provider
      value={{
        toggleEvent,
        currentEvent,
        filteredData,
        filter,
        toggleFilter,
        data: eventsArr,
        period,
      }}
    >
      {children}
    </Context.Provider>
  );
};
