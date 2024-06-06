import { FC, ReactNode } from "react";
import styles from "./ListContainer.module.scss";
import { Header, HeaderProps } from "./components/Header";
import { ItemList } from "@/src/features/ItemList";

type ListContainerProps = HeaderProps & {
  children?: ReactNode;
};

export const BoxContainer: FC<ListContainerProps> = ({
  children,
  ...headerProps
}) => {
  return (
    <div className={styles.Container}>
      <Header {...headerProps} />
      {children}
    </div>
  );
};

export const BoxContainerPlaceholder: FC<{ chartCase?: boolean }> = ({
  chartCase,
}) => {
  const fakeList = Array.from(Array(4)).map((e) => ({
    name: "",
    quantity: "",
  }));
  return (
    <div
      className={`${styles.Container}${
        chartCase ? " " + styles.Container__increaseHeight : ""
      }`}
    >
      <Header title="" visitorsCase={{ percentage: "", value: "" }} />
      <ItemList lightBg list={fakeList} />
    </div>
  );
};
