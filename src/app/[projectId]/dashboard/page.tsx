import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
import { ListContainer } from "@/src/components/ListContainer";

type DashboardProps = { params: { projectId: string } };

const Dashboard: FC<DashboardProps> = ({ params: { projectId } }) => {
  return (
    <>
      <ActivityGraph /> <ListContainer title="Countries" />
    </>
  );
};

export default Dashboard;
