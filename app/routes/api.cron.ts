// NOTE - While in beta, cron jobs are free on all plans. However, it'll be a paid feature for general availability. https://vercel.com/docs/cron-jobs
export async function loader() {
  return new Response("Hello Cron!");
}

// path: "/api/cron?key=sharedKey"
// import type { VercelRequest, VercelResponse } from "@vercel/node";

// export default function handler(
//   request: VercelRequest,
//   response: VercelResponse
// ) {
//   if (request.query.key !== "sharedKey") {
//     response.status(404).end();
//     return;
//   }

//   response.status(200).json({ success: true });
// }
