import { TooltipWithBounds } from "@visx/tooltip";
import React, { FC } from "react";
import style from "./Tooltip.module.scss";
import { ClockType } from "../../types";

type TooltipProps = {
  tooltipData: { value: string; date: string };
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
      <TooltipWithBounds
        className={style.Tooltip}
        key={Math.random()}
        top={50}
        left={tooltipLeft + 12}
      >
        <div className={style.Tooltip_ValueContainer}>
          <span>Visitors:</span>
          <span>{tooltipData.value}</span>
        </div>
        <div>{tooltipData.date}</div>
      </TooltipWithBounds>

      <div className={style.Line} style={{ left: tooltipLeft }} />
      <div
        className={style.Circle}
        style={{ left: tooltipLeft, top: tooltipTop }}
      />
    </>
  );
};
