import { renderToString } from "react-dom/server";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

import { otherRoutes } from "./other-routes.server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  for (const handler of otherRoutes) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse) return otherRouteResponse;
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  const html = `<!DOCTYPE html>${markup}`;

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Content-Length", String(Buffer.byteLength(html)));

  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
