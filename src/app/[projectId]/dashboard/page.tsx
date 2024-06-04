import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
import { ActivityList } from "./(features)/ActivityList";

type DashboardProps = { params: { projectId: string } };

const Dashboard: FC<DashboardProps> = ({ params: { projectId } }) => {
  return (
    <>
      <ActivityGraph />
      <ActivityList />
    </>
  );
};

export default Dashboard;
