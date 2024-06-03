import { FC } from "react";
// import arrowBack from "../../../../../public/arrow-back.svg";
import Link from "next/link";

import styles from "./Breadcrumb.module.scss";
import { ArrowBackSvg } from "./components/ArrowBackSvg";

type BreadcrumbProps = {
  projectName: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ projectName }) => {
  return (
    <div className={styles.Breadcrumb}>
      <Link href="/" className={styles.Breadcrumb_Link}>
        <ArrowBackSvg />
        <span>Home</span>
      </Link>
      <span>/</span>
      <span>{projectName}</span>
    </div>
  );
};
