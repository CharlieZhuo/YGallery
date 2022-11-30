import React, { ReactNode } from "react";
import Link from "next/link";

import styles from "./footer.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <footer className={styles.footer}>
        <div>
          <p className={styles.footertitle}>悠悠画廊</p>{" "}
          <Link href={"/about"}>关于</Link>
          <Link href={"/contact"}>联系</Link>
        </div>
        <p className={styles.copyright}>© 2022 悠悠画廊 版权所有</p>
      </footer>
    </>
  );
}
