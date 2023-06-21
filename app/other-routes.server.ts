import type { EntryContext } from "@remix-run/node";
import { getSitemapXml, getRobotsText } from "./utils/seo";

type Handler = (
  request: Request,
  remixContext: EntryContext
) => Promise<Response | null> | null;

const pathedRoutes: Record<string, Handler> = {
  "/sitemap.xml": async (request, remixContext) => {
    const sitemap = await getSitemapXml(request, remixContext);
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": String(Buffer.byteLength(sitemap)),
      },
    });
  },

  "/robots.txt": async (request) => {
    const robotsText = await getRobotsText(request);
    return new Response(robotsText, {
      headers: {
        "Content-Type": "text/plain",
        "Content-Length": String(Buffer.byteLength(robotsText)),
      },
    });
  },
};

const otherRoutes: Array<Handler> = [
  ...Object.entries(pathedRoutes).map(([path, handler]) => {
    return (request: Request, remixContext: EntryContext) => {
      if (new URL(request.url).pathname !== path) return null;

      return handler(request, remixContext);
    };
  }),
];

export { otherRoutes, pathedRoutes };
