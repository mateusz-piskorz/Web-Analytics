import { FC, ReactNode } from "react";
import styles from "./ListContainer.module.scss";
import { Header, HeaderProps, HeaderPlaceholder } from "./components/Header";
import { ItemList } from "@/src/features/ItemList";

type ListContainerProps = HeaderProps & {
  children?: ReactNode;
  h400desktop?: boolean;
  placeholder?: boolean;
};

export const BoxContainer: FC<ListContainerProps> = ({
  children,
  h400desktop,
  ...headerProps
}) => {
  const bodyClassName = `${styles.Container_Body}${
    h400desktop ? " " + styles.Container_Body__increaseHeight : ""
  }`;

  return (
    <div className={styles.Container}>
      <Header {...headerProps} />
      <div className={bodyClassName}>{children}</div>
    </div>
  );
};

export const BoxContainerPlaceholder: FC<{ h400desktop?: boolean }> = ({
  h400desktop,
}) => {
  const fakeList = Array.from(Array(14)).map((e) => ({
    name: "",
    quantity: "",
  }));
  const bodyClassName = `${styles.Container_Body}${
    h400desktop ? " " + styles.Container_Body__increaseHeight : ""
  }`;
  return (
    <div className={styles.Container}>
      <HeaderPlaceholder />
      <div className={bodyClassName}>
        <ItemList lightBg list={fakeList} />
      </div>
    </div>
  );
};
