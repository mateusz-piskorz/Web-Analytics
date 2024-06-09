import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import { ItemList, Item } from "@/src/features/ItemList";
import style from "@/src/features/ItemList/ItemList.module.scss";
import { ListItem } from "@/src/features/ItemList/components/ListItem";
import { countEvents } from "../Analytics/utils";

type Event = {
  name: string;
  labels: {
    id: string;
    createdAt: Date;
    eventName: string;
    name: string;
  }[];
};

type EventListProps = {
  list: Event[];
  title: string;
};

export const EventList: FC<EventListProps> = ({ list, title }) => {
  return (
    <BoxContainer title={title}>
      <div className={style.List}>
        {list.map((item, index) => {
          const labelList = countEvents(item.labels);
          return (
            <>
              <ListItem
                key={index}
                name={item.name}
                quantity={item.labels.length}
              />
              {labelList.map((label, index) => {
                return (
                  <ListItem
                    isNested
                    key={index}
                    name={label.name}
                    quantity={label.value}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </BoxContainer>
  );
};
