import { ActivityDataObj } from "./types";

export const splitDataByDate = <R extends { createdAt: Date }[]>(
  dataInDescOrder: R,
  periodDate: Date
) => {
  const firstIndexOfPreviousPeriod = dataInDescOrder.findIndex(
    (e) => e.createdAt.getTime() < periodDate.getTime()
  );

  const newestData =
    firstIndexOfPreviousPeriod === -1
      ? dataInDescOrder
      : (dataInDescOrder.slice(0, firstIndexOfPreviousPeriod) as R);

  const dataOnePeriodAgo =
    firstIndexOfPreviousPeriod === -1
      ? []
      : (dataInDescOrder.slice(firstIndexOfPreviousPeriod) as R);

  return { newestData, dataOnePeriodAgo };
};
