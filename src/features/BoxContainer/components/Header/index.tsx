import { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

export type HeaderProps = {
  title: string;
  chartCase?: {
    value: number | string;
    percentage: number;
  };
};

export const Header: FC<HeaderProps> = ({ title, chartCase }) => {
  const isPositivePercentage = chartCase ? chartCase?.percentage >= 0 : false;

  const percentageClassName = `${styles.Header_Percentages} ${
    isPositivePercentage
      ? styles.Header_Percentages__green
      : styles.Header_Percentages__red
  }`;

  const percentages = isPositivePercentage
    ? `+${chartCase?.percentage.toFixed(2)}%`
    : `${chartCase?.percentage.toFixed(2)}%`;

  return (
    <div className={styles.Header}>
      {chartCase ? (
        <>
          <div className={styles.Header_Visitors}>
            <span className={styles.Header_VisitorsText}>{title}</span>
            <span className={styles.Header_VisitorsNumber}>
              {chartCase.value}
            </span>
          </div>
          <span className={percentageClassName}>{percentages}</span>
        </>
      ) : (
        <div className={styles.Header_TitleContainer}>
          <h2>{title}</h2>
          <Image src="/infoIcon.svg" width={16} height={16} alt="info-icon" />
        </div>
      )}
    </div>
  );
};

export const HeaderPlaceholder = () => {
  return <div className={styles.Header}></div>;
};
