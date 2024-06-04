import { FC } from "react";
import style from "./ListItem.module.scss";

type ListItemProps = {
  name: string;
  quantity: number;
};

export const ListItem: FC<ListItemProps> = ({ name, quantity }) => {
  return (
    <div className={style.ListItem}>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
