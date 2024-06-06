import { FC } from "react";
import styles from "./Heading.module.scss";
import { LiveIcon } from "./assets/LiveIcon";
import { Select } from "@/src/features/Select";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type HeadingProps = {
  projectName: string;
};

export const Heading: FC<HeadingProps> = async ({ projectName }) => {
  const project = await db.project.findUnique({
    where: { name: projectName },
  });

  return (
    <div className={styles.Heading}>
      <div>
        <h1 className={styles.Heading_Title}>Web Analytics</h1>
        <a href={project?.href} className={styles.Heading_Link} target="_blank">
          {project?.hrefLabel}
          <LiveIcon />
        </a>
      </div>
      <Select />
    </div>
  );
};
