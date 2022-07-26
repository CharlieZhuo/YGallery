import { PostResponse } from "./strapiLib";
import { getPlaiceholder } from "plaiceholder";

export async function getBlurdataFromPostResponse(
  serverEndpoint: string,
  post: PostResponse
) {
  const imgs = post.data?.attributes?.Images?.data;
  if (imgs) {
    const phs = await Promise.all(
      imgs.map(async (i) => {
        const { base64, img } = await getPlaiceholder(
          `${serverEndpoint}${i.attributes?.url!}`
        );
        return base64;
      })
    );
    return phs;
  }
}
