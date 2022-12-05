import Link from "next/link";
import styles from "../regularHeader.module.css";

export default function Links() {
  return (
    <>
      <li className={styles.headerLink}>
        {" "}
        <Link href={"/catagory/huaniao"}>花&#38;鸟</Link>
      </li>
    </>
  );
}
