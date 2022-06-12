import * as Oazapfts from "oazapfts/lib/runtime";
export function checkAndSetEV(op: Oazapfts.RequestOpts): Oazapfts.RequestOpts {
  if (!process.env.STRAPI_ACCESS_TOKEN) {
    throw Error("Please config STRAPI_ACCESS_TOKEN environment variable");
  } else if (!process.env.STRAPI_ENDPOINT) {
    throw Error("Please config STRAPI_ENDPOINT environment variable");
  } else if (!process.env.STRAPI_ENDPOINT_ASSET) {
    throw Error("Please config STRAPI_ENDPOINT_ASSET environment variable");
  } else {
    op.headers = {
      Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
    };
    op.baseUrl = process.env.STRAPI_ENDPOINT;
    return op;
  }
}
