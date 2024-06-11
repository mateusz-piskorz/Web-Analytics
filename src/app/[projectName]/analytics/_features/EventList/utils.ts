import { EventWithLabels } from "@/src/db/data-access/event";

export const countEvents = (array: EventWithLabels["labels"]) => {
  const data = array.reduce((acc, item) => {
    const { name, eventName } = item;

    const index = acc.findIndex((e: any) => e.name === name);
    if (index === -1) {
      acc.push({ name, eventName, value: 1 });
    } else {
      acc[index] = { ...acc[index], value: acc[index].value + 1 };
    }

    return acc;
  }, [] as { name: string; eventName: string; value: number }[]);

  return data;
};

export type CountedEvents = ReturnType<typeof countEvents>;
