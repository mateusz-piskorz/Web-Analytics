import { FC } from "react";
import style from "./ListItem.module.scss";
import { Item } from "../../types";

export const ListItem: FC<
  Item & { lightBg?: boolean; isNested?: boolean; onClick?: () => void }
> = ({ onClick, name, quantity, lightBg, isNested }) => {
  return (
    <div
      onClick={onClick}
      className={`${style.ListItem}${
        lightBg ? " " + style.ListItem__lightBg : ""
      }${isNested ? " " + style.ListItem__nested : ""}`}
    >
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
