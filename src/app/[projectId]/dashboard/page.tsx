import React, { FC } from "react";

const Dashboard: FC<{ params: { projectId: string } }> = ({ params }) => {
  console.log(params.projectId);
  return <h1 style={{ color: "red" }}>Dashboard</h1>;
};

export default Dashboard;
