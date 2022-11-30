"use client";
import { ReactElement, useRef } from "react";
import { Link } from "react-feather";

import styles from "../regularHeader.module.css";
import LoginOrUser from "./LoginOrUser";

export default function DynamicHeaderLayout({
  children,
}: {
  children: ReactElement;
}) {
  const btn = useRef<HTMLButtonElement | null>(null);
  const linksContainer = useRef<HTMLUListElement | null>(null);
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        <Link href={"/"}>悠悠画廊</Link>
      </h2>
      <button
        ref={btn}
        className={styles.showMore}
        onClick={(e) => {
          if (linksContainer.current) {
            linksContainer.current.toggleAttribute("showing");
          }
          if (btn.current) {
            btn.current.toggleAttribute("showing");
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line className={styles.top} x1="3" y1="6" x2="21" y2="6"></line>
          <line className={styles.mid} x1="3" y1="12" x2="21" y2="12"></line>
          <line className={styles.btm} x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <ul ref={linksContainer} className={styles.links}>
        {children}
      </ul>
    </header>
  );
}
