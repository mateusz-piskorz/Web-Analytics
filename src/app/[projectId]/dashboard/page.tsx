import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
import { ActivityList } from "./(features)/ActivityList";
import style from "./styles.module.scss";

type DashboardProps = { params: { projectId: string } };

const countriesArr = [
  { name: "Poland", quantity: 29 },
  { name: "Belgium", quantity: 4 },
];

const browsersArr = [
  { name: "Chrome", quantity: 17 },
  { name: "Safari", quantity: 4 },
  { name: "Opera", quantity: 2 },
];

const OSArr = [
  { name: "Linux", quantity: 69 },
  { name: "Mac", quantity: 27 },
  { name: "Windows", quantity: 4 },
];

const Dashboard: FC<DashboardProps> = ({ params: { projectId } }) => {
  return (
    <>
      <ActivityGraph />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countriesArr} />
        <ActivityList title="Browsers" list={browsersArr} />
        <ActivityList title="Operating Systems" list={OSArr} />
      </div>
    </>
  );
};

export default Dashboard;
