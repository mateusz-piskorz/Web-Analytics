import { FC } from "react";
import style from "./ListItem.module.scss";
import { Item } from "../../types";

export const ListItem: FC<Item & { lightBg?: boolean }> = ({
  name,
  quantity,
  lightBg,
}) => {
  console.log(lightBg);
  return (
    <div
      className={`${style.ListItem}${
        lightBg ? " " + style.ListItem__lightBg : ""
      }`}
    >
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
