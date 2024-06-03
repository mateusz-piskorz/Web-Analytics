import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";

type NavigationProps = {
  projectName: string;
  isNavOpen: boolean;
  setNavClose: () => void;
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
            href={`/${projectName}/dashboard`}
          >
            Dashboard
          </Link>
        </li>
        <li className={styles.Nav_Item}>
          <Link
            onClick={setNavClose}
            className={styles.Nav_Link}
            href={`/${projectName}/analytics`}
          >
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  );
};
