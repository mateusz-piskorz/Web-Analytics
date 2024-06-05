import React, { FC } from "react";

const Analytics: FC<{ params: { projectName: string } }> = ({ params }) => {
  return <h1 style={{ color: "red" }}>Analytics</h1>;
};

export default Analytics;
