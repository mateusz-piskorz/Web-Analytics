import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
import { ActivityList } from "./(features)/ActivityList";
import style from "./styles.module.scss";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type DashboardProps = { params: { projectId: string } };

const Dashboard: FC<DashboardProps> = async ({ params: { projectId } }) => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const project = await db.project.findUnique({ where: { name: projectId } });

  const analytic = await db.analytic.findMany({
    where: {
      projectId: project?.id,
      createdAt: {
        gte: sevenDaysAgo,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const countriesArr = mapHelperFunc(analytic, "country");
  const browsersArr = mapHelperFunc(analytic, "browser");
  const OSArr = mapHelperFunc(analytic, "OS");

  return (
    <>
      <ActivityGraph />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countriesArr} />
        <ActivityList title="Browsers" list={browsersArr} />
        <ActivityList title="Operating Systems" list={OSArr} />
      </div>
    </>
  );
};

export default Dashboard;

const mapHelperFunc = (array: any[], objectName: string) => {
  const cos = array.reduce((cnt, cur) => {
    const rightIndex = cnt.findIndex((e: any) => e.name === cur[objectName]);
    if (rightIndex !== -1) {
      //@ts-ignore
      cnt[rightIndex] = {
        //@ts-ignore
        ...cnt[rightIndex],
        //@ts-ignore
        quantity: cnt[rightIndex].quantity + 1,
      };
    } else {
      //@ts-ignore
      cnt.push({ name: cur[objectName], quantity: 1 });
    }
    return cnt;
  }, []);
  return cos;
};
