import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import CommonLayout from "../../components/commonLayout";
import * as api from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";
import styles from "../../styles/Post.module.css";
import Image from "next/image";
export default function Post({
  post,
  assetEndpoint,
}: {
  post: api.PostResponse;
  assetEndpoint: string;
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.data?.attributes?.title}</h1>
      <p className={styles.discription}>{post.data?.attributes?.discription}</p>
      <ul>
        {post.data?.attributes?.Images?.data?.map((img) => {
          const url = img.attributes?.url!;
          const width = img.attributes?.width!;
          const height = img.attributes?.height!;

          return (
            <li className={styles.listItem} key={img.id}>
              <Image
                src={`${assetEndpoint}${url}`}
                width={width}
                height={height}
                // layout="fill"
                objectFit="contain"
                sizes="600px"
              ></Image>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Post.getLayout = (page: any) => <CommonLayout>{page} </CommonLayout>;

export const getStaticProps: GetStaticProps = async (context) => {
  checkAndSetEV(api.defaults);
  api.defaults.headers = { ...api.defaults.headers, populate: "*" };

  const id = context.params?.id;
  if (typeof id === "string") {
    const response = await fetch(
      `${process.env.STRAPI_ENDPOINT!}/posts/${id}?populate=*`,
      {
        headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
      }
    );

    if (response.status === 200)
      return {
        props: {
          post: await response.json(),
          assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
        },
      };
    else {
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
  const response = await api.getPosts();
  if (response.status === 200 && response.data.data) {
    const paths = response.data.data
      .filter((p) => typeof p.id === "string")
      .map((p) => {
        return { params: { id: p.id } };
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
