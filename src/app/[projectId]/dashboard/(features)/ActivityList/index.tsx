import { FC } from "react";
import { ListItem } from "./components/ListItem";
import style from "./ActivityList.module.scss";
import { ListContainer } from "@/src/components/ListContainer";
import { Item } from "./types";

type ActivityListProps = {
  list: Item[];
  title: string;
};

export const ActivityList: FC<ActivityListProps> = ({ list, title }) => {
  return (
    <ListContainer title={title}>
      <div className={style.List}>
        {list.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </ListContainer>
  );
};
