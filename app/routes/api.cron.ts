// NOTE - While in beta, cron jobs are free on all plans. However, it'll be a paid feature for general availability. https://vercel.com/docs/cron-jobs

import type { VercelRequest, VercelResponse } from "@vercel/node";

export const loader = async () => {
  return new Response("Hello Cron!");
};

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.query.key !== "k6p1uesj9y") {
    response.status(404).end();
    return;
  }

  response.status(200).json({ success: true });
}
