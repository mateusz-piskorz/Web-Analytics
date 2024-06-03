import React, { FC } from "react";
import { Breadcrumb } from "./(features)/Breadcrumb";
import { Hamburger } from "./(features)/Hamburger";
import styles from "./layout.module.scss";

const ProjectsLayout: FC<{
  children: React.ReactNode;
  params: { projectId: string };
}> = ({ children, params: { projectId } }) => {
  return (
    <>
      <header className={styles.Header}>
        <Breadcrumb projectName={projectId} />
        <Hamburger />
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
