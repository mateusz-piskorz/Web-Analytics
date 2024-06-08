"use client";
import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { AnalyticsSvg } from "./components/AnalyticsSvg";
import { DashboardSvg } from "./components/DashboardSvg";

import { usePathname } from "next/navigation";

type NavigationProps = {
  projectName: string;
  isNavOpen: boolean;
  setNavClose?: () => void;
  desktopCase?: boolean;
};

const linkArr = [
  { href: "dashboard", label: "Dashboard" },
  { href: "analytics", label: "Analytics" },
];

export const Navigation: FC<NavigationProps> = ({
  projectName,
  isNavOpen,
  setNavClose,
}) => {
  const pathname = usePathname();
  const arr = pathname.split("/");
  const currentPath = arr[arr.length - 1];

  return (
    <nav
      className={`${styles.Nav}${!isNavOpen ? " " + styles.Nav__hidden : ""}`}
    >
      <ul className={styles.Nav_List}>
        {linkArr.map(({ href, label }) => (
          <li className={styles.Nav_Item} key={href}>
            <Link
              onClick={setNavClose}
              className={`${styles.Nav_Link}${
                currentPath === href ? " " + styles.Nav_Link__active : ""
              }`}
              href={`/${projectName}/${href}?analyticPeriod=7`}
            >
              <DashboardSvg />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
