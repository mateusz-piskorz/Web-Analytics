"use client";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import React from "react";
import { useEvents } from "../../_context";
import { useSearchParams } from "next/navigation";
import { Period } from "@/src/types";

export const Chart = () => {
  const { events, currentEvent, filter } = useEvents();
  const searchParams = useSearchParams();
  const period = (searchParams.get("analyticPeriod")?.toString() ||
    "7") as Period;

  const currentEventData = events.find((e) => e.name === currentEvent) || {
    labels: [],
    labelsOnePeriodAgo: [],
  };

  const filteredData = currentEventData.labels.filter(({ name }) =>
    filter.includes(name)
  );

  const filteredOldData = currentEventData.labelsOnePeriodAgo.filter(
    ({ name }) => filter.includes(name)
  );

  return (
    <ActivityGraph
      data={filteredData}
      period={period}
      total={filteredData.length}
      totalPeriodAgo={filteredOldData.length}
    />
  );
};
