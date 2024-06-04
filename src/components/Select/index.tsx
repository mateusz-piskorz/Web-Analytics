import { FC, useId } from "react";
import Image from "next/image";
import style from "./Select.module.scss";

export const Select: FC = () => {
  const id = useId();
  return (
    <div className={style.SelectWrapper}>
      <select className={style.SelectWrapper_Select}>
        <option value="24h">Last 24 Hours</option>
        <option value="7d">Last 7 Days</option>
        <option value="30d">Last 30 Days</option>
      </select>
      <Image
        className={style.SelectWrapper_Img}
        src="/arrowDown.svg"
        alt="arrow-down-icon"
        width={10}
        height={6}
      />
    </div>
  );
};
