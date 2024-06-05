import React, { FC } from "react";
import { ActivityGraph } from "./(features)/ActivityGraph";
import { ActivityList } from "./(features)/ActivityList";
import style from "./styles.module.scss";
import { PrismaClient } from "@prisma/client";
import { generateArr, oneDay, oneHour } from "./constants";

const db = new PrismaClient();

type DashboardProps = { params: { projectName: string } };

const Dashboard: FC<DashboardProps> = async ({ params: { projectName } }) => {
  const hoursAgo24 = new Date(Date.now() - 86400000);
  const daysAgo7 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const daysAgo30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const project = await db.project.findUnique({ where: { name: projectName } });

  const analytic = await db.analytic.findMany({
    where: {
      projectId: project?.id,
      createdAt: {
        gte: daysAgo7,
      },
    },
    orderBy: { createdAt: "desc" },
  });
  console.log(analytic);

  const countriesArr = mapHelperFunc(analytic, "country");
  const browsersArr = mapHelperFunc(analytic, "browser");
  const OSArr = mapHelperFunc(analytic, "OS");

  const magicNumber = 7;
  const MyActivityArray = generateArr(magicNumber);
  const newVisitors = MyActivityArray.map((item) => {
    let visitors = 0;
    const divider = magicNumber === 24 ? oneHour : oneDay;
    const { x, y } = item;
    const time = x.getTime();
    const min = time - divider / 2;
    const max = time + divider / 2 + 1;
    analytic.forEach((analyticItem) => {
      const analyticTime = analyticItem.createdAt.getTime();
      if (analyticTime > min && analyticTime < max) {
        visitors++;
      }
    });
    return { x, y: visitors };
  });

  return (
    <>
      <ActivityGraph
        data={newVisitors}
        ClockType={magicNumber === 24 ? "hours" : "days"}
      />
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
