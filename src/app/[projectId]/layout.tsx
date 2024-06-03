import React, { FC } from "react";
import { Breadcrumb } from "./(features)/Breadcrumb";
import { Hamburger } from "./(features)/Hamburger";
import styles from "./layout.module.scss";
import { Navigation } from "./(features)/Navigation";
import { Header } from "./(features)/Header";

const ProjectsLayout: FC<{
  children: React.ReactNode;
  params: { projectId: string };
}> = ({ children, params: { projectId } }) => {
  return (
    <>
      <Header projectId={projectId} />
      {/* <div>{children}</div> */}
    </>
  );
};

export default ProjectsLayout;
