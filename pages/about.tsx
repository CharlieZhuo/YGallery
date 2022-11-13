import { GetStaticProps } from "next";
import CommonLayout from "../components/commonLayout";
import { checkAndSetEV } from "../lib/strapiUtil";
import Image from "next/legacy/image";
import styles from "../styles/about.module.css";

import { AboutResponse, defaults } from "../lib/strapiLib";

export default function About({
  assetEndpoint,
  aboutInfo,
}: {
  assetEndpoint: string;
  aboutInfo: AboutResponse;
}) {
  const data = aboutInfo?.data;
  const imageElement = data?.attributes?.avatar?.data?.attributes?.url ? (
    <div className={styles.avatar}>
      <Image
        src={`${assetEndpoint}${data.attributes?.avatar?.data?.attributes?.url}`}
        alt={data.attributes?.avatar?.data?.attributes?.alternativeText}
        layout="fill"
        sizes="600px"
        objectFit="contain"
        priority={true}
      ></Image>
    </div>
  ) : (
    <></>
  );
  if (data)
    return (
      <>
        {imageElement}
        <h2 className={styles.title}>{data.attributes?.title}</h2>
        <p className={styles.discription}>{data.attributes?.discription}</p>
      </>
    );
}
export const getStaticProps: GetStaticProps = async (context) => {
  checkAndSetEV(defaults);

  const response = await fetch(
    `${process.env.STRAPI_ENDPOINT!}/about?populate=*`,
    {
      headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
    }
  );
  if (response.status === 200) {
    const json = await response.json();
    // console.log(json);
    return {
      props: {
        aboutInfo: json,
        assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
      },
    };
  } else {
    console.log(
      `Error code:${response.status} ,Error:${await response.json()}`
    );
    return { props: {} };
  }
};
About.getLayout = (page: any) => <CommonLayout>{page} </CommonLayout>;
