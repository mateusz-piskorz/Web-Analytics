import { FC, ReactNode } from "react";
import styles from "./ListContainer.module.scss";
import { Header, HeaderProps, HeaderPlaceholder } from "./components/Header";
import { ItemList } from "@/src/features/ItemList";

type ListContainerProps = HeaderProps & {
  children?: ReactNode;
  extraClassName?: string;
};

export const BoxContainer: FC<ListContainerProps> = ({
  children,
  extraClassName,
  ...headerProps
}) => {
  // console.log(extraClassName);
  return (
    <div
      className={`${styles.Container}${
        extraClassName ? " " + extraClassName : ""
      }`}
    >
      <Header {...headerProps} />
      {children}
    </div>
  );
};

export const BoxContainerPlaceholder: FC = ({}) => {
  const fakeList = Array.from(Array(14)).map((e) => ({
    name: "",
    quantity: "",
  }));

  return (
    <div className={styles.Container}>
      <HeaderPlaceholder />
      <ItemList lightBg list={fakeList} />
    </div>
  );
};
