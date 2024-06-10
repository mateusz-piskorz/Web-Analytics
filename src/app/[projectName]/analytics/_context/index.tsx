"use client";
import React, { FC, useContext, ReactNode, useState, useEffect } from "react";
import { countEvents } from "../_features/EventList/utils";

type ContextType = {
  filteredData: {
    id: string;
    createdAt: Date;
    eventName: string;
    name: string;
  }[];
  data: {
    name: string;
    labels: {
      name: string;
      eventName: string;
      value: number;
    }[];
  }[];
  currentEvent: string;
  toggleEvent: (eventName: string) => void;
  labelsFilter: string[];
  toggleLabelFilter: (label: string) => void;
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
  const newData = EventsArr.map((e) => {
    return { name: e.name, labels: countEvents(e.labels) };
  });
  const [currentEvent, setCurrentEvent] = useState(newData[0].name);
  const [labelsFilter, setLabelsFilter] = useState(
    newData[0].labels.map((e) => e.name)
  );

  const toggleEvent = (eventName: string) => {
    if (currentEvent === eventName) {
      setCurrentEvent("");
      setLabelsFilter([]);
    } else {
      setCurrentEvent(eventName);
      setLabelsFilter(
        newData.find((e) => e.name === eventName)!.labels.map((e) => e.name)
      );
    }
  };

  const toggleLabelFilter = (label: string) => {
    const labelInFilter = labelsFilter.find((e) => e === label);
    if (labelInFilter) {
      setLabelsFilter((prev) => prev.filter((e) => e !== label));
      labelsFilter.length === 1 && setCurrentEvent("");
    } else {
      setLabelsFilter((prev) => [...prev, label]);
    }
  };

  const currentEventData = EventsArr.find((e) => e.name === currentEvent) || {
    labels: [],
  };

  const filteredData = currentEventData.labels.filter(({ name }) =>
    labelsFilter.includes(name)
  );

  return (
    <Context.Provider
      value={{
        toggleEvent,
        currentEvent,
        filteredData,
        labelsFilter,
        toggleLabelFilter,
        data: newData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
