import React, { FC } from "react";

const Page: FC<{ params: { projectId: string } }> = ({
  params: { projectId },
}) => {
  return <h1>Hi</h1>;
};

export default Page;
