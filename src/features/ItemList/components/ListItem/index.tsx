import { FC } from "react";
import style from "./ListItem.module.scss";
import { Item } from "../../types";

export const ListItem: FC<Item & { lightBg?: boolean; isNested?: boolean }> = ({
  name,
  quantity,
  lightBg,
  isNested,
}) => {
  return (
    <div
      className={`${style.ListItem}${
        lightBg ? " " + style.ListItem__lightBg : ""
      }${isNested ? " " + style.ListItem__nested : ""}`}
    >
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
