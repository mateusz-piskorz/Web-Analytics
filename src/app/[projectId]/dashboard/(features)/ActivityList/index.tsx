import { FC } from "react";
import { ListItem } from "./components/ListItem";
import style from "./ActivityList.module.scss";
import { ListContainer } from "@/src/components/ListContainer";
const itemsArr = [
  { name: "Poland", quantity: 29 },
  { name: "Belgium", quantity: 4 },
];

export const ActivityList: FC = () => {
  return (
    <ListContainer title="Countries">
      <div className={style.List}>
        {itemsArr.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </ListContainer>
  );
};
