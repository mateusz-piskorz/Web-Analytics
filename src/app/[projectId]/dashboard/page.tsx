import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
type DashboardProps = { params: { projectId: string } };

const Dashboard: FC<DashboardProps> = ({ params: { projectId } }) => {
  return <ActivityGraph />;
};

export default Dashboard;
