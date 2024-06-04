import React, { FC } from "react";
import { Breadcrumb } from "./(features)/Breadcrumb";
import { Header } from "./(features)/Header";
import styles from "./layout.module.scss";

import { Heading } from "./(features)/Heading";
const ProjectsLayout: FC<{
  children: React.ReactNode;
  params: { projectId: string };
}> = ({ children, params: { projectId } }) => {
  return (
    <div className={styles.Wrapper}>
      <Header projectId={projectId} />

      <div className={styles.Wrapper_RightSide}>
        <Breadcrumb projectName={projectId} onlyOnDesktop />
        <Heading />
        {children}
      </div>
    </div>
  );
};

export default ProjectsLayout;
