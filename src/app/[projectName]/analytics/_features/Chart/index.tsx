"use client";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import React from "react";
import { useEvents } from "../../_context";
import { useSearchParams } from "next/navigation";
import { Period } from "@/src/types";
import { splitDataByDate } from "@/src/utils";
import { PERIODS_AGO } from "@/src/constants";

export const Chart = () => {
  const { filteredData } = useEvents();
  const searchParams = useSearchParams();
  const period = (searchParams.get("analyticPeriod")?.toString() ||
    "7") as Period;

  const { newestData, dataOnePeriodAgo } = splitDataByDate(
    filteredData,
    PERIODS_AGO[period][0]
  );

  return (
    <ActivityGraph
      data={newestData}
      period={period}
      total={newestData.length}
      totalPeriodAgo={dataOnePeriodAgo.length}
    />
  );
};
