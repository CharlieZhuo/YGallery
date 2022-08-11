import {
  PostResponse,
  defaults,
  getPosts,
  LikeListResponse,
} from "../../lib/strapiLib";

import { checkAndSetEV } from "../../lib/strapiUtil";

import { GetStaticPaths, GetStaticProps } from "next";
import Gallery from "../../components/gallery";
import Head from "next/head";
import parseISO from "date-fns/parseISO";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

export type neightbourPostType = { title: string; id: string };

export default function Post({
  post,
  nextPost,
  previousPost,
  likeCount,
  assetEndpoint,
}: {
  post: PostResponse;
  nextPost: neightbourPostType | null;
  previousPost: neightbourPostType | null;
  likeCount: number | undefined;
  assetEndpoint: string;
}) {
  const imgs = post.data?.attributes?.Images?.data?.map((img, index) => {
    const url = img.attributes?.url!;
    return {
      src: `${assetEndpoint}${url}?format=webp&quality=100`,
      width: img.attributes?.width!,
      height: img.attributes?.height!,
      title: img.attributes?.name!,
    };
  });

  const galleryProp = {
    imgs,
    seriesName: post.data?.attributes?.title,
    publishDate: post.data?.attributes?.publishedAt,
    nextPost,
    previousPost,
    likeCount,
    postId: post.data?.id,
  };
  const images = post.data?.attributes?.Images?.data;
  if (images)
    return (
      <>
        <Head>
          <title>{`${post.data?.attributes?.title}-悠悠画廊`}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Gallery key={post.data?.id} {...galleryProp}></Gallery>
      </>
    );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  if (typeof id === "string") {
    const postResponse = await fetch(
      `${process.env.STRAPI_ENDPOINT!}/posts/${id}?populate=*`,
      {
        headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
      }
    );

    checkAndSetEV(defaults);
    const allPosts = await getPosts({ sort: `publishedAt:desc` });
    const likeResponse = await fetch(
      `${process.env.STRAPI_ENDPOINT!}/likes/?filters[post][id][$eq]=${id}`,
      {
        headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
      }
    );

    if (
      postResponse.status === 200 &&
      allPosts.status === 200 &&
      allPosts.data.data
    ) {
      const post = (await postResponse.json()) as PostResponse;
      const likes = (await likeResponse.json()) as LikeListResponse;
      const likeCount = likes.data?.length;
      console.log(likeCount);
      const index = allPosts.data.data.findIndex((p) => {
        return p.id === post.data?.id;
      });
      let nextPost: neightbourPostType | null = null;
      let previousPost: neightbourPostType | null = null;
      if (index > 0) {
        const title = allPosts.data.data.at(index - 1)?.attributes?.title;
        const id = allPosts.data.data.at(index - 1)?.id;
        if (title && id) previousPost = { title, id };
      }
      if (index < allPosts.data.data.length - 1) {
        const title = allPosts.data.data.at(index + 1)?.attributes?.title;
        const id = allPosts.data.data.at(index + 1)?.id;
        if (title && id) nextPost = { title, id };
      }

      if (post.data?.attributes?.publishedAt) {
        const date = parseISO(post.data?.attributes?.publishedAt);
        const formatedDate = format(date, "PPP", { locale: zhCN });
        post.data.attributes.publishedAt = formatedDate;
      }
      return {
        props: {
          post,
          previousPost,
          nextPost,
          likeCount,
          assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
        },
        revalidate: 600,
      };
    } else {
      console.log(
        `Error code:${postResponse.status} ,Error:${JSON.stringify(
          await postResponse.json()
        )}`
      );
    }
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  checkAndSetEV(defaults);
  const response = await getPosts();
  if (response.status === 200 && response.data.data) {
    const paths = response.data.data
      .filter((p) => typeof p.id === "string")
      .map((p) => {
        return { params: { id: p.id } };
      });
    return {
      paths: paths,
      fallback: "blocking",
    };
  } else
    throw Error(
      `Can't get paths from CMS.Error code:${
        response.status
      },Error object:${JSON.stringify(response.data)} `
    );
};
