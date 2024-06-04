import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
import { ActivityList } from "./(features)/ActivityList";

type DashboardProps = { params: { projectId: string } };

const countriesArr = [
  { name: "Poland", quantity: 29 },
  { name: "Belgium", quantity: 4 },
];

const Dashboard: FC<DashboardProps> = ({ params: { projectId } }) => {
  return (
    <>
      <ActivityGraph />
      <ActivityList title="Countries" list={countriesArr} />
    </>
  );
};

export default Dashboard;
