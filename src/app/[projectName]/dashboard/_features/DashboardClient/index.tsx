"use client";
import { Period } from "@/src/types";
import React, { useEffect, FC, useState } from "react";
import { ActivityData } from "@/src/db/data-access/activity";
import { countAnalytics } from "./utils";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "../ActivityList";
import style from "./styles.module.scss";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api?analyticPeriod=${analyticPeriod}&projectName=${projectName}`
        );
        setData(await res.json());
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        fetchData();
      }, 15000);
    };

    setTimeout(() => {
      fetchData();
    }, 15000);
  }, []);

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
