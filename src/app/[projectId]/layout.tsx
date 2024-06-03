import React, { FC } from "react";
import { Breadcrumb } from "./(features)/Breadcrumb";
import { Header } from "./(features)/Header";
import styles from "./layout.module.scss";
import { Navigation } from "./(features)/Navigation";

const ProjectsLayout: FC<{
  children: React.ReactNode;
  params: { projectId: string };
}> = ({ children, params: { projectId } }) => {
  return (
    <div className={styles.Wrapper}>
      <Header projectId={projectId} />

      <div className={styles.WrapperRightSide}>
        <Breadcrumb projectName={projectId} onlyOnDesktop />
        {children}
      </div>
    </div>
  );
};

export default ProjectsLayout;
