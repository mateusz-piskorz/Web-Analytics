import { useEffect } from "react";
import { Period } from "../types";

export const useRefetch = (
  projectName: string,
  analyticPeriod: Period,
  onSuccess: (data: any) => void,
  endpoint: "api" | "event/api"
) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/${endpoint}?analyticPeriod=${analyticPeriod}&projectName=${projectName}`
        );
        onSuccess(await res.json());
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        fetchData();
      }, 15000);
    };

    setTimeout(() => {
      fetchData();
    }, 15000);
  }, []);
};
