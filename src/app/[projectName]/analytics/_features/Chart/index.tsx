"use client";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import React from "react";
import { useEvents } from "../../_context";
import { useSearchParams } from "next/navigation";
import { Period } from "@/src/types";

export const Chart = () => {
  const { filteredData } = useEvents();
  const searchParams = useSearchParams();
  const period = (searchParams.get("analyticPeriod")?.toString() ||
    "7") as Period;

  return (
    <ActivityGraph
      visitors={10}
      visitorsOnePeriodAgo={20}
      data={filteredData}
      period={period}
    />
  );
};
