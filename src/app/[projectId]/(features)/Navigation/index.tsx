import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";

type NavigationProps = {
  projectName: string;
};

export const Navigation: FC<NavigationProps> = ({ projectName }) => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <Link href={`/${projectName}/dashboard`}>Dashboard</Link>
          <Link href={`/${projectName}/analytics`}>Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};
