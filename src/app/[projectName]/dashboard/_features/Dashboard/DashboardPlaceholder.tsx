import { FC } from "react";
import { BoxContainerPlaceholder } from "@/src/features/BoxContainer";
import style from "./styles.module.scss";

export const DashboardPlaceholder: FC = () => {
  return (
    <>
      <BoxContainerPlaceholder />
      <div className={style.ActivityListContainer}>
        <BoxContainerPlaceholder />
        <BoxContainerPlaceholder />
        <BoxContainerPlaceholder />
      </div>
    </>
  );
};
