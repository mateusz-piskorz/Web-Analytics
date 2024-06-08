import React, { FC } from "react";
import { Breadcrumb } from "./_features/Breadcrumb";
import { Header } from "./_features/Header";
import styles from "./layout.module.scss";
import { Heading } from "./_features/Heading";

const ProjectsLayout: FC<{
  children: React.ReactNode;
  params: { projectName: string };
}> = ({ children, params: { projectName } }) => {
  return (
    <div className={styles.Wrapper}>
      <Header projectName={projectName} />

      <div className={styles.Wrapper_RightSide}>
        <Breadcrumb projectName={projectName} onlyOnDesktop />
        <Heading projectName={projectName} />
        {children}
      </div>
    </div>
  );
};

export default ProjectsLayout;
