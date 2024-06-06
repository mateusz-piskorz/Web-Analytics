import { FC } from "react";
import styles from "./Heading.module.scss";
import { LiveIcon } from "./assets/LiveIcon";
import { Select } from "@/src/features/Select";

export const Heading: FC = () => {
  return (
    <div className={styles.Heading}>
      <div>
        <h1 className={styles.Heading_Title}>Web Analytics</h1>
        <a href="#" className={styles.Heading_Link}>
          audiophile-ecommerce-website.com
          <LiveIcon />
        </a>
      </div>
      <Select />
    </div>
  );
};
