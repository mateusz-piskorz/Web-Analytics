import { FC } from "react";
import style from "./ListItem.module.scss";
import { Item } from "../../types";

export const ListItem: FC<Item> = ({ name, quantity }) => {
  return (
    <div className={style.ListItem}>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
