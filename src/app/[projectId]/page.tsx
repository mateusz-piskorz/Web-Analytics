import React, { FC } from "react";

const Page: FC<{ params: { projectId: string } }> = ({
  params: { projectId },
}) => {
  return <div>{projectId}</div>;
};

export default Page;
