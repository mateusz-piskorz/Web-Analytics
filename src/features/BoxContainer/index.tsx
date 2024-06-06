import { FC, ReactNode } from "react";
import styles from "./ListContainer.module.scss";
import { Header, HeaderProps } from "./components/Header";

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
