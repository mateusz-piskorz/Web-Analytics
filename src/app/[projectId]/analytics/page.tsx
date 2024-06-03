import React, { FC } from "react";

const Analytics: FC<{ params: { projectId: string } }> = ({ params }) => {
  console.log(params.projectId);
  return <h1 style={{ color: "red" }}>Analytics</h1>;
};

export default Analytics;
