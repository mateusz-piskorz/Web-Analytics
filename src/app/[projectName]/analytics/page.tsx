import React, { FC } from "react";

const Analytics: FC<{ params: { projectName: string } }> = ({ params }) => {
  console.log(params.projectName);
  return <h1 style={{ color: "red" }}>Analytics</h1>;
};

export default Analytics;
