import { GetStaticPaths, GetStaticProps } from "next";
import { checkAndSetEV } from "../../lib/strapiUtil";
import styles from "../../styles/catagory.module.css";

import * as api from "../../lib/strapiLib";
import PostListCard from "../../components/postListCard";
import CommonLayout from "../../components/commonLayout";
import PhotoAlbum from "react-photo-album";

export default function Catagory({
  catagories,
  posts,
  assetEndpoint,
}: {
  catagories: api.CatagoryListResponse;
  posts: api.PostListResponse;
  assetEndpoint: string;
}) {
  const catagory = catagories.data && catagories.data[0];
  const catagoryElement = (
    <section className={styles.catagoryInfo}>
      <h2>{catagory?.attributes?.name}</h2>
      <p>{catagory?.attributes?.discription}</p>
    </section>
  );

  const quantityElement = (
    <div className={styles.quantity}>
      <p>
        共找到<span>{posts.data?.length ?? `0`}</span>篇作品
      </p>
    </div>
  );

  return (
    <main>
      {catagoryElement}
      {quantityElement}
      {/* <ul className={styles.list}>
        {posts.data?.map((p, index) => {
          return (
            <PostListCard
              src={`${assetEndpoint}${p?.attributes?.Images?.data![0].attributes
                ?.url!}`}
              alt={p?.attributes?.Images?.data![0].attributes?.alternativeText!}
              title={p?.attributes?.title!}
              id={p.id!}
              priority={index === 0}
              key={p.id}
              quantity={p.attributes?.Images?.data?.length ?? 1}
              aspectRatio={
                (p?.attributes?.Images?.data![0].attributes?.width ?? 0) /
                (p?.attributes?.Images?.data![0].attributes?.height ?? 1)
              }
            ></PostListCard>
          );
        })}
      </ul> */}
      <PhotoAlbum
        layout="masonry"
        photos={posts.data!.map((p, index) => {
          return {
            height: p?.attributes?.Images?.data![0].attributes?.height!,
            width: p?.attributes?.Images?.data![0].attributes?.width!,
            src: `${assetEndpoint}${p?.attributes?.Images?.data![0].attributes
              ?.url!}`,
            alt: p?.attributes?.Images?.data![0].attributes?.alternativeText!,
            title: p?.attributes?.title!,
            id: p.id!,
            priority: index === 0,
            key: p.id,
            quantity: p.attributes?.Images?.data?.length ?? 1,
            aspectRatio:
              p?.attributes?.Images?.data![0].attributes?.width! /
              p?.attributes?.Images?.data![0].attributes?.height!,
          };
        })}
        columns={getColoumnNumber}
        renderPhoto={(prop) => {
          return (
            <PostListCard
              {...prop.photo}
              sizeVw={100 / getColoumnNumber(prop.layoutOptions.containerWidth)}
            ></PostListCard>
          );
        }}
        renderColumnContainer={(props) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: `column`,
                alignItems: `flex-start`,
                width: ` calc((100% - 15px) / 2)`,
                justifyContent: `flex-start`,
                gap: `${props.layoutOptions.spacing}px`,
              }}
            >
              {props.children}
            </div>
          );
        }}
      ></PhotoAlbum>
    </main>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const catagoryurl = context.params?.catagoryurl;
  if (typeof catagoryurl === "string") {
    const catagoryResponse = await fetch(
      `${process.env
        .STRAPI_ENDPOINT!}/catagories?filters[url][$eq]=${catagoryurl}`,
      {
        headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
      }
    );
    const response = await fetch(
      `${process.env
        .STRAPI_ENDPOINT!}/posts?filters[catagory][url][$eq]=${catagoryurl}&populate=*&sort=publishedAt%3Adesc`,
      {
        headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
      }
    );

    if (response.status === 200 && catagoryResponse.status === 200) {
      const rj = await response.json();
      const crj = await catagoryResponse.json();

      return {
        props: {
          catagories: crj,
          posts: rj,
          assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
        },
      };
    } else {
      console.log(
        `Error code:${response.status} ,Error:${JSON.stringify(
          await response.json()
        )}`
      );
    }
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  checkAndSetEV(api.defaults);
  const response = await api.getCatagories();
  if (response.status === 200 && response.data.data) {
    const paths = response.data.data.map((catagory) => {
      return { params: { catagoryurl: catagory.attributes?.url } };
    });
    return {
      paths: paths,
      fallback: "blocking", // See the "fallback" section below
    };
  } else
    throw Error(
      `Can't get paths from CMS.Error code:${
        response.status
      },Error object:${JSON.stringify(response.data)} `
    );
};

Catagory.getLayout = (page: any) => <CommonLayout>{page} </CommonLayout>;
function getColoumnNumber(containerWidth: number) {
  if (containerWidth < 500) return 1;
  if (containerWidth < 1000) return 2;
  return 3;
}
