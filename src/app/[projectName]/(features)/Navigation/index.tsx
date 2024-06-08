import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { AnalyticsSvg } from "./components/AnalyticsSvg";
import { DashboardSvg } from "./components/DashboardSvg";

type NavigationProps = {
  projectName: string;
  isNavOpen: boolean;
  setNavClose?: () => void;
  desktopCase?: boolean;
};

export const Navigation: FC<NavigationProps> = ({
  projectName,
  isNavOpen,
  setNavClose,
}) => {
  return (
    <nav
      className={`${styles.Nav}${!isNavOpen ? " " + styles.Nav__hidden : ""}`}
    >
      <ul className={styles.Nav_List}>
        <li className={styles.Nav_Item}>
          <Link
            onClick={setNavClose}
            className={`${styles.Nav_Link} ${styles.Nav_Link__active}`}
            href={`/${projectName}/dashboard?analyticPeriod=7`}
          >
            <DashboardSvg />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={styles.Nav_Item}>
          <Link
            onClick={setNavClose}
            className={styles.Nav_Link}
            href={`/${projectName}/analytics?analyticPeriod=7`}
          >
            <AnalyticsSvg />
            <span>Analytics</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
