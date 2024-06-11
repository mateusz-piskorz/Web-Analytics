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
    <BoxContainer title={title} extraClassName={style.__flex1}>
      <div className={style.List}>
        {list.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </BoxContainer>
  );
};
