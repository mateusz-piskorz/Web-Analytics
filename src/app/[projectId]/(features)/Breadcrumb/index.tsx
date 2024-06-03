import { FC } from "react";
// import arrowBack from "../../../../../public/arrow-back.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./Breadcrumb.module.scss";

type BreadcrumbProps = {
  projectName: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ projectName }) => {
  return (
    <div className={styles.Breadcrumb}>
      <Image
        className={styles.Breadcrumb_Img}
        src="/arrow-back.svg"
        width={22}
        height={20}
        alt="arrow back icon"
      />
      <span className={styles.Breadcrumb_Home}>Home</span>
      <span className={styles.Breadcrumb_Slash}>/</span>
      <span className={styles.Breadcrumb_ProjectName}>{projectName}</span>
    </div>
  );
};
