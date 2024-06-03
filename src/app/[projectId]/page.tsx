import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";

const Page: FC<{ params: { projectId: string } }> = ({
  params: { projectId },
}) => {
  return <ActivityGraph />;
};

export default Page;
