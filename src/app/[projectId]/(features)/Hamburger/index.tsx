import React, { FC } from "react";
import styles from "./Hamburger.module.scss";

type HamburgerProps = {
  onClick: () => void;
};

export const Hamburger: FC<HamburgerProps> = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      <svg
        width="33"
        height="20"
        viewBox="0 0 33 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="mid"
          d="M27 19L32 19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          id="top"
          d="M2 1L8 1"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          id="bottom"
          d="M1.76715 19H18.7731"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          id="topSmall"
          d="M32 1H14.994"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          id="bottomSmall"
          d="M1.76715 10H7.43581H32"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  );
};
