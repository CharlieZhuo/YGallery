// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { contactValidationSchema, contactMessage } from "../contact";
import * as api from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";
import {} from "../contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    const body = req.body;

    if (contactValidationSchema.isValidSync(body)) {
      const forwarded = req.headers["x-forwarded-for"];
      const ip =
        typeof forwarded === "string"
          ? forwarded.split(/, /)[0]
          : req.socket.remoteAddress;

      checkAndSetEV(api.defaults);
      const feedbacksResponse = await api.postFeedbacks({
        data: { ...body, ipAddress: ip },
      });
      res.status(+feedbacksResponse.status).json(feedbacksResponse);
      // res.status(200).json({ success: true });
    } else {
      res.status(400).send({
        status: 400,
        data: {
          data: null,
          error: {
            status: 400,
            name: "无效的请求对象",
            message: "",
            details: req.body,
          },
        },
      });
    }
  }
}
