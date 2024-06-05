"use client";
import { FC, useId } from "react";
import Image from "next/image";
import style from "./Select.module.scss";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const Select: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, refresh } = useRouter();

  const handleChange = (selectedPeriod: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("analyticPeriod", selectedPeriod);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={style.SelectWrapper}>
      <select
        className={style.SelectWrapper_Select}
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get("analyticPeriod")?.toString() || "7d"}
      >
        <option value="24">Last 24 Hours</option>
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
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
