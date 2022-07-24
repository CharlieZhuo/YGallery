import * as api from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";

import { GetStaticPaths, GetStaticProps } from "next";
import Gallery from "../../components/gallery";
import Head from "next/head";

export default function Post({
  post,
  assetEndpoint,
}: {
  post: api.PostResponse;
  assetEndpoint: string;
}) {
  const imageData = post.data?.attributes?.Images?.data?.map((img, index) => {
    const url = img.attributes?.url!;
    return {
      src: `${assetEndpoint}${url}`,
      width: img.attributes?.width!,
      height: img.attributes?.height!,
      title: img.attributes?.name!,
    };
  });

  const options = {
    dataSource: imageData,
  };
  const images = post.data?.attributes?.Images?.data;
  if (images)
    return (
      <>
        <Head>
          <title>{post.data?.attributes?.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Gallery imgs={imageData}></Gallery>
      </>
    );
}
export const getStaticProps: GetStaticProps = async (context) => {
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
