"use client";
import React, { FC, useState } from "react";
import { Breadcrumb } from "../Breadcrumb";
import { Hamburger } from "../Hamburger";
import { Navigation } from "../Navigation";
import styles from "./Header.module.scss";

type HeaderProps = {
  projectName: string;
};

export const Header: FC<HeaderProps> = ({ projectName }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className={styles.Header}>
        <Breadcrumb projectName={projectName} />
        <Hamburger onClick={() => setIsNavOpen((prev) => !prev)} />
        <Navigation
          setNavClose={() => setIsNavOpen(false)}
          projectName={projectName}
          isNavOpen={isNavOpen}
        />
      </header>
    </>
  );
};
