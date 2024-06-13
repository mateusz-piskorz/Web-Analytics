"use client";
import { Period } from "@/src/types";
import React, { useEffect, FC, useState } from "react";
import { ActivityData } from "@/src/db/data-access/activity";
import { countAnalytics } from "./utils";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "../ActivityList";
import style from "./styles.module.scss";
import { useRefetch } from "@/src/hooks/useRefetch";

type DashboardClientProps = {
  initData: ActivityData;
  projectName: string;
  analyticPeriod: Period;
};

export const DashboardClient: FC<DashboardClientProps> = ({
  analyticPeriod,
  initData,
  projectName,
}) => {
  const [{ activity, onePeriodAgoCount }, setData] = useState(initData);

  const { countries, browsers, OSs } = countAnalytics(activity);

  useRefetch(projectName, analyticPeriod, setData, "api");

  return (
    <>
      <ActivityGraph
        data={activity}
        period={analyticPeriod}
        total={activity.length}
        totalPeriodAgo={onePeriodAgoCount}
      />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countries} />
        <ActivityList title="Browsers" list={browsers} />
        <ActivityList title="Operating Systems" list={OSs} />
      </div>
    </>
  );
};
