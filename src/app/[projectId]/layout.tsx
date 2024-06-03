import React, { FC } from "react";
import { Breadcrumb } from "./(features)/Breadcrumb";
import styles from "./layout.module.scss";

const ProjectsLayout: FC<{
  children: React.ReactNode;
  params: { projectId: string };
}> = ({ children, params: { projectId } }) => {
  return (
    <>
      <header className={styles.Header}>
        <Breadcrumb projectName={projectId} />

        {/* <nav>
        <ul>
          <li></li>
        </ul>
      </nav> */}
      </header>
      {/* <div>{children}</div> */}
    </>
  );
};

export default ProjectsLayout;
