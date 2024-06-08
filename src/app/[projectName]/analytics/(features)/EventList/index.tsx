import { FC } from "react";
import { BoxContainer } from "@/src/features/BoxContainer";
import { ItemList, Item } from "@/src/features/ItemList";
import style from "@/src/features/ItemList/ItemList.module.scss";
import { ListItem } from "@/src/features/ItemList/components/ListItem";

type myType = {
  category: string;
  value: number;
  labels: {
    label: string;
    value: number;
  }[];
}[];

type EventListProps = {
  list: myType;
  title: string;
};

export const EventList: FC<EventListProps> = ({ list, title }) => {
  return (
    <BoxContainer title={title}>
      <div className={style.List}>
        {list.map((item, index) => {
          return (
            <>
              <ListItem
                key={index}
                name={item.category}
                quantity={item.value}
              />
              {item.labels.map((label, index) => {
                return (
                  <ListItem
                    isNested
                    key={index}
                    name={label.label}
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
