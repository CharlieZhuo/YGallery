import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import PostListCard from "../components/postListCard";
import * as api from "../lib/strapiLib";
import { checkAndSetEV } from "../lib/strapiUtil";
import { PhotoAlbum } from "react-photo-album";

const Home = ({
  postList,
  assetEndpoint,
  catagories,
}: {
  postList: api.PostListResponse;
  assetEndpoint: string;
  catagories: api.CatagoryListResponse;
}) => {
  if (postList) {
    const catagoriesItems = (
      <ul className={styles.links}>
        {catagories.data?.map((c) => {
          return (
            <li key={c.id}>
              <Link href={`/catagory/${c.attributes?.url}`}>
                {c.attributes?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>悠画廊</h1> {catagoriesItems}
        </header>
        <Head>
          <title>悠画廊</title>
          <meta name="description" content="一个中国画爱好者的网站" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <p className={styles.intro}>中国画爱好者</p>

          <PhotoAlbum
            layout="masonry"
            photos={postList.data!.map((p, index) => {
              return {
                height: p?.attributes?.Images?.data![0].attributes?.height!,
                width: p?.attributes?.Images?.data![0].attributes?.width!,
                src: `${assetEndpoint}${p?.attributes?.Images?.data![0]
                  .attributes?.url!}`,
                alt: p?.attributes?.Images?.data![0].attributes
                  ?.alternativeText!,
                title: p?.attributes?.title!,
                id: p.id!,
                key: p.id,
                quantity: p.attributes?.Images?.data?.length ?? 1,
                aspectRatio:
                  p?.attributes?.Images?.data![0].attributes?.width! /
                  p?.attributes?.Images?.data![0].attributes?.height!,
                priority: index < 5,
              };
            })}
            columns={getColoumnNumber}
            renderPhoto={(prop) => {
              return (
                <PostListCard
                  {...prop.photo}
                  style={{ marginBlock: `${prop.layoutOptions.spacing / 2}px` }}
                  sizeVw={
                    100 / getColoumnNumber(prop.layoutOptions.containerWidth)
                  }
                ></PostListCard>
              );
            }}
            spacing={15}
          ></PhotoAlbum>
        </main>

        <footer className={styles.footer}>
          <div>
            <p className={styles.footertitle}>悠画廊</p>
            <Link href={"/about"}>关于</Link>
            <Link href={"/contact"}>联系</Link>
          </div>
          <p className={styles.copyright}>© 2022 悠画廊 版权所有</p>
        </footer>
      </div>
    );
  }
};
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  checkAndSetEV(api.defaults);
  const allposts = await api.getPosts({
    populate: "*",
    sort: "publishedAt:desc",
  });
  const catagories = await api.getCatagories({ sort: "id" });
  if (allposts.status === 200 && catagories.status === 200)
    return {
      props: {
        postList: allposts.data,
        assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
        catagories: catagories.data,
      },
    };
  else {
    console.log(
      `Error code:${allposts.status} ,Error:${JSON.stringify(allposts.data)}`
    );
    return { props: {} };
  }
};

function getColoumnNumber(containerWidth: number) {
  if (containerWidth < 500) return 1;
  if (containerWidth < 1000) return 2;
  return 3;
}
