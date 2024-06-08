import { FC } from "react";
import Link from "next/link";
import styles from "./Breadcrumb.module.scss";
import { ArrowBackSvg } from "./components/ArrowBackSvg";

type BreadcrumbProps = {
  projectName: string;
  onlyOnDesktop?: boolean;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({
  projectName,
  onlyOnDesktop,
}) => {
  return (
    <div
      className={`${styles.Breadcrumb}${
        onlyOnDesktop ? " " + styles.Breadcrumb__hiddenOnMobile : ""
      }`}
    >
      <Link href="/" className={styles.Breadcrumb_Link}>
        <ArrowBackSvg />
        <span>Home</span>
      </Link>
      <span>/</span>
      <span>{projectName}</span>
    </div>
  );
};
