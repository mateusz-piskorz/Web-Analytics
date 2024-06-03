"use client";
import React, { FC, useState } from "react";
import { Breadcrumb } from "../Breadcrumb";
import { Hamburger } from "../Hamburger";
import { Navigation } from "../Navigation";
import styles from "./Header.module.scss";

type HeaderProps = {
  projectId: string;
};

export const Header: FC<HeaderProps> = ({ projectId }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className={styles.Header}>
      <Breadcrumb projectName={projectId} />
      <Hamburger onClick={() => setIsNavOpen((prev) => !prev)} />
      <Navigation
        setNavClose={() => setIsNavOpen(false)}
        projectName={projectId}
        isNavOpen={isNavOpen}
      />
    </header>
  );
};
