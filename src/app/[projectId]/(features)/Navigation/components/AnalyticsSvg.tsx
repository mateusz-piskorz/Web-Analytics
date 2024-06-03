import React, { FC } from "react";
import styles from "./styles.module.scss";

export const AnalyticsSvg: FC = () => {
  return (
    <svg
      className={styles.Svg}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={styles.Rect}
        x="11.6304"
        y="0.5"
        width="2.47826"
        height="15"
        stroke="white"
      />
      <rect
        className={styles.Rect}
        x="6.06519"
        y="3.97826"
        width="2.47826"
        height="11.5217"
        stroke="white"
      />
      <rect
        className={styles.Rect}
        x="0.5"
        y="8.15218"
        width="2.47826"
        height="7.34783"
        stroke="white"
      />
    </svg>
  );
};
