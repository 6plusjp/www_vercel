// NOTE - Vercel cron job hits this endpoint daily (see vercel.json "crons").
// This must remain a Remix resource route: a loader-only module, no default
// component export. Writing it as a @vercel/node style handler ({ request,
// response }) makes Remix treat the default export as a React component and
// crash with 500 (request.query is not a thing on render props).
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  if (url.searchParams.get("key") !== "k6p1uesj9y") {
    return new Response(null, { status: 404 });
  }

  return json({ success: true });
};