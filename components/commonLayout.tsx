import Link from "next/link";
import styles from "./commonLayout.module.css";
export default function CommonLayout({ children }: { children: any }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.links}>
          <li className={styles.title}>
            <Link href={"/"}>悠画廊</Link>
          </li>
          <li>
            <Link href={"/"}>花</Link>
          </li>
          <li>
            <Link href={"/"}>鸟</Link>
          </li>
          <li>
            <Link href={"/"}>山水</Link>
          </li>
          <li>
            <Link href={"/"}>关于</Link>
          </li>
          <li>
            <Link href={"/contact"}>联系</Link>
          </li>
        </ul>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div>
          <p className={styles.footertitle}>悠画廊</p>
          <Link href={"/"}>关于</Link>
          <Link href={"/"}>联系</Link>
        </div>
        <p className={styles.copyright}>© 2022 网站所有者 版权所有</p>
      </footer>
    </div>
  );
}
