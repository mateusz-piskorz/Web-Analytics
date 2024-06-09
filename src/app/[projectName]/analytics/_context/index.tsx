import React, { FC, useContext, ReactNode, useEffect } from "react";
import { Event } from "@prisma/client";
type ContextType = any;

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
  EventsArr: Event[];
}> = ({ children }) => {
  return (
    <Context.Provider
      value={{
        comments: "data",
      }}
    >
      {children}
    </Context.Provider>
  );
};
