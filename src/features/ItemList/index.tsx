import { FC } from "react";
import { ListItem } from "./components/ListItem";
import style from "./ItemList.module.scss";
import { Item } from "./types";
export type { Item };

type ActivityListProps = {
  list: Item[];
  lightBg?: boolean;
};

export const ItemList: FC<ActivityListProps> = ({ list, lightBg }) => {
  return (
    <div className={style.List}>
      {list.map((item, index) => (
        <ListItem key={index} lightBg={lightBg} {...item} />
      ))}
    </div>
  );
};
