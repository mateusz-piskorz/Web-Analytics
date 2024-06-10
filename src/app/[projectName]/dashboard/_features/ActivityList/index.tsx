import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import { ItemList, Item } from "@/src/features/ItemList";
import style from "./ActivityList.module.scss";

type ActivityListProps = {
  list: Item[];
  title: string;
};

export const ActivityList: FC<ActivityListProps> = ({ list, title }) => {
  return (
    <BoxContainer title={title} extraClassName={style.EventBoxContainer}>
      <ItemList list={list} />
    </BoxContainer>
  );
};
