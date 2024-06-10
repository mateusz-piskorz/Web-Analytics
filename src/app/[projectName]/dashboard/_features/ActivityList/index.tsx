import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import { ListItem, Item } from "@/src/features/ListItem";
import style from "./ActivityList.module.scss";

type ActivityListProps = {
  list: Item[];
  title: string;
};

export const ActivityList: FC<ActivityListProps> = ({ list, title }) => {
  return (
    <BoxContainer title={title} extraClassName={style.EventBoxContainer}>
      {list.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </BoxContainer>
  );
};
