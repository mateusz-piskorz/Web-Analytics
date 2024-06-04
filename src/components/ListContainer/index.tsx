import { FC, ReactNode } from "react";
import Image from "next/image";
import styles from "./ListContainer.module.scss";

type ListContainerProps = {
  children?: ReactNode;
  title: string;
};

export const ListContainer: FC<ListContainerProps> = ({ children, title }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Header}>
        <h2>{title}</h2>
        <Image src="/infoIcon.svg" width={16} height={16} alt="info-icon" />
      </div>
      {children}
    </div>
  );
};
