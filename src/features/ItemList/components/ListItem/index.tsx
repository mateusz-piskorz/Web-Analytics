import { FC } from "react";
import style from "./ListItem.module.scss";
import { Item } from "../../types";

export const ListItem: FC<
  Item & { lightBg?: boolean; onClick?: () => void }
> = ({ onClick, name, quantity, lightBg }) => {
  return (
    <div
      onClick={onClick}
      className={`${style.ListItem}${
        lightBg ? " " + style.ListItem__lightBg : ""
      }`}
    >
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
