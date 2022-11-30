import { GetStaticProps } from "next";
import Image from "next/legacy/image";
import styles from "./about.module.css";

export default async function About() {
  return (
    <>
      <h2 className={styles.title}>About page</h2>
    </>
  );
}

async function getData() {}
