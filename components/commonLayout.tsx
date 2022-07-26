import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import styles from "./commonLayout.module.css";
export default function CommonLayout({ children }: { children: any }) {
  const links = useRef<HTMLUListElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <h2 className={styles.title}>
          <Link href={"/"}>悠悠画廊</Link>
        </h2>
        <button
          ref={btn}
          className={styles.showMore}
          onClick={(e) => {
            if (links.current) {
              links.current.toggleAttribute("showing");
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
        <ul ref={links} className={styles.links}>
          <li>
            <Link href={"/catagory/huaniao"}>花&#38;鸟</Link>
          </li>
          <li>
            <Link href={"/catagory/shanshui"}>山&#38;水</Link>
          </li>
          <li>
            <Link href={"/catagory/other"}>其他</Link>
          </li>
        </ul>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div>
          <p className={styles.footertitle}>悠悠画廊</p>{" "}
          <Link href={"/about"}>关于</Link>
          <Link href={"/contact"}>联系</Link>
        </div>
        <p className={styles.copyright}>© 2022 悠悠画廊 版权所有</p>
      </footer>
    </div>
  );
}
