"use client";
import React from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";

export const ActivityGraph = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Wrapper_Header}></div>
      <Chart />
    </div>
  );
};
