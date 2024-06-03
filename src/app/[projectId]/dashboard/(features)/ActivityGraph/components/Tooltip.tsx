import { TooltipWithBounds } from "@visx/tooltip";
import React, { FC } from "react";
import style from "../styles.module.css";

type TooltipProps = {
  tooltipData: any;
  tooltipLeft: number;
  tooltipTop: number;
};

export const Tooltip: FC<TooltipProps> = ({
  tooltipData,
  tooltipLeft,
  tooltipTop,
}) => {
  return (
    <>
      <TooltipWithBounds key={Math.random()} top={50} left={tooltipLeft + 12}>
        {tooltipData.y}
      </TooltipWithBounds>

      <div className={style.line} style={{ left: tooltipLeft }} />
      <div
        className={style.circle}
        style={{ left: tooltipLeft, top: tooltipTop }}
      />
    </>
  );
};
