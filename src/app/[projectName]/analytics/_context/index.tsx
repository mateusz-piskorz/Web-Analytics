"use client";
import React, { FC, useContext, ReactNode, useState } from "react";
import { CountedEvents } from "./utils";
import { EventWithLabels } from "@/src/db/data-access/event";

export type Data = {
  name: string;
  total: number;
  labels: CountedEvents;
};

type ContextType = {
  events: EventWithLabels[];
  currentEvent: string;
  toggleEvent: (eventName: string, labels: string[]) => void;
  filter: string[];
  toggleFilter: (label: string) => void;
};

const Context = React.createContext<ContextType | null>(null);

export const useEvents = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error("useUser context is undefined");
  }
  return context;
};

export const EventsProvider: FC<{
  children?: ReactNode;
  events: EventWithLabels[];
}> = ({ children, events }) => {
  const defaultEvent = events.find((e) => e.labels.length > 0);
  const [currentEvent, setCurrentEvent] = useState(defaultEvent?.name || "");
  const [filter, setFilter] = useState(
    defaultEvent?.labels.map((e) => e.name) || []
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
        currentEvent,
        filter,
        events,
        toggleEvent,
        toggleFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};
