// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { defaults, getPostsById, postLikes } from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";
import {} from "../contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.debug(`Received Post requerst on /api/like with body:${req.body}`);
    if (!parseInt(req.body)) {
      res.status(400).send("Invalid postId");
      return;
    }

    const forwarded = req.headers["x-forwarded-for"];
    const ip =
      typeof forwarded === "string"
        ? forwarded.split(/, /)[0]
        : req.socket.remoteAddress;

    const postId = req.body;
    if (!postId) {
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
      const notLikeAlready = !IsPostAlreadyLikedByUser(postId, ip);
      const result = await Promise.all([dosePostExist, notLikeAlready]);
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
      } else if (!result[1]) {
        res.status(400).send({
          status: 400,
          data: {
            data: null,
            error: {
              status: 400,
              name: "IP对应的用户已经喜欢了指定IP的文章，不能重复喜欢 ",
              message: "",
              details: req.body,
            },
          },
        });
      } else {
        checkAndSetEV(defaults);
        const currentTime = new Date().toISOString();
        const likeResponse = await postLikes({
          data: { post: postId, ip, time: currentTime },
        });
        res.status(+likeResponse.status).json(likeResponse);
      }
    }
  } else {
    res.status(400).send("only support POST method");
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
