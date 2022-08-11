// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { defaults, getPostsById, postLikes } from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";
import {} from "../contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.debug(
      `Received Post requerst on /api/alreadyLike with query:${req.query}`
    );

    const forwarded = req.headers["x-forwarded-for"];
    const ip =
      typeof forwarded === "string"
        ? forwarded.split(/, /)[0]
        : req.socket.remoteAddress;

    const postId = req.query.id;
    if (!postId || typeof postId !== "string" || !parseInt(postId)) {
      res.status(400).send({
        status: 400,
        data: {
          data: null,
          error: {
            status: 400,
            name: "无效的postid",
            message: "",
            details: req.body,
          },
        },
      });
    } else if (!ip) {
      res.status(400).send({
        status: 400,
        data: {
          data: null,
          error: {
            status: 400,
            name: "无效的IP地址",
            message: "",
            details: req.body,
          },
        },
      });
    } else {
      const dosePostExist = IsPostIdValid(postId);
      const isLikeAlready = IsPostAlreadyLikedByUser(postId, ip);
      const result = await Promise.all([dosePostExist, isLikeAlready]);
      if (!result[0]) {
        res.status(400).send({
          status: 400,
          data: {
            data: null,
            error: {
              status: 400,
              name: "没有Id对应的Post",
              message: "",
              details: req.body,
            },
          },
        });
      } else {
        res.status(200).json({
          alreadyLiked: result[1],
        });
      }
    }
  }
}
async function IsPostAlreadyLikedByUser(postId: any, ip: string | undefined) {
  try {
    if (!postId || !ip) return true;
    else {
      const likeResponse = await fetch(
        `${process.env
          .STRAPI_ENDPOINT!}/likes?filters[ip][$eq]=${ip}&filters[post][$eq]=${postId}`,
        {
          headers: {
            Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
          },
        }
      );
      if (likeResponse.status === 200) {
        return true;
      } else return false;
    }
  } catch {
    return false;
  }
}
async function IsPostIdValid(postId: any) {
  if (postId && typeof postId === "string") {
    checkAndSetEV(defaults);
    const result = await getPostsById(postId);
    if (result.status === 200) return result;
    else return false;
  } else return false;
}
