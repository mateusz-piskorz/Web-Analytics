import { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

export type HeaderProps = {
  title: string;
  visitorsCase?: {
    value: number | string;
    percentage: string;
  };
};

export const Header: FC<HeaderProps> = ({ title, visitorsCase }) => {
  return (
    <div className={styles.Header}>
      {visitorsCase ? (
        <>
          <div className={styles.Header_Visitors}>
            <span className={styles.Header_VisitorsText}>{title}</span>
            <span className={styles.Header_VisitorsNumber}>
              {visitorsCase.value}
            </span>
          </div>
          <span className={styles.Header_Percentages}>
            {visitorsCase.percentage}
          </span>
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
