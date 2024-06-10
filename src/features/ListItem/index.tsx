import { FC } from "react";
import style from "./ListItem.module.scss";

export const ListItem: FC<Item> = ({ onClick, name, quantity, lightBg }) => {
  const className = `${style.ListItem}${
    lightBg ? " " + style.ListItem__lightBg : ""
  }`;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${className} ${style.ListItem_Button}`}
      >
        <span>{name}</span>
        <span>{quantity}</span>
      </button>
    );
  }

  return (
    <div className={className}>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};

export type Item = {
  name: string;
  quantity: number;
  lightBg?: boolean;
  onClick?: () => void;
};
