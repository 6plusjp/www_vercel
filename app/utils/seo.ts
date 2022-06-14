import type { EntryContext } from "remix";
import { isEqual } from "lodash";

import { getDomainUrl, removeTrailingSlash } from "./misc";

// sitemap
function typedBoolean<T>(
  value: T
): value is Exclude<T, "" | 0 | false | null | undefined> {
  return Boolean(value);
}

export type SitemapEntry = {
  route: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
};
export type SEOHandle = {
  getSitemapEntries?: (
    request: Request
  ) =>
    | Promise<Array<SitemapEntry | null> | null>
    | Array<SitemapEntry | null>
    | null;
};

async function getSitemapXml(request: Request, remixContext: EntryContext) {
  const domainUrl = getDomainUrl(request);

  function getEntry({
    route,
    lastmod,
    changefreq,
    priority = 0.7,
  }: SitemapEntry) {
    return `
  <url>
    <loc>${domainUrl}${route}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${typeof priority === "number" ? `<priority>${priority}</priority>` : ""}
  </url>
    `.trim();
  }

  const rawSitemapEntries = (
    await Promise.all(
      Object.entries(remixContext.routeModules).map(async ([id, mod]) => {
        if (id === "root") return;

        const handle = mod.handle as SEOHandle | undefined;
        if (handle?.getSitemapEntries) {
          return handle.getSitemapEntries(request);
        }

        // exclude resource routes from the sitemap
        // (these are an opt-in via the getSitemapEntries method)
        if (!("default" in mod)) return;

        const manifestEntry = remixContext.manifest.routes[id];
        if (!manifestEntry) {
          console.warn(`Could not find a manifest entry for ${id}`);
          return;
        }
        let parentId = manifestEntry.parentId;
        let parent = parentId ? remixContext.manifest.routes[parentId] : null;

        let path;
        if (manifestEntry.path) {
          path = removeTrailingSlash(manifestEntry.path);
        } else if (manifestEntry.index) {
          path = "";
        } else {
          return;
        }

        while (parent) {
          // the root path is '/', so it messes things up if we add another '/'
          const parentPath = parent.path
            ? removeTrailingSlash(parent.path)
            : "";
          path = `${parentPath}/${path}`;
          parentId = parent.parentId;
          parent = parentId ? remixContext.manifest.routes[parentId] : null;
        }

        // we can't handle dynamic routes, so if the handle doesn't have a
        // getSitemapEntries function, we just
        if (path.includes(":")) return;
        if (id === "root") return;

        const entry: SitemapEntry = { route: removeTrailingSlash(path) };
        return entry;
      })
    )
  )
    .flatMap((z) => z)
    .filter(typedBoolean);

  const sitemapEntries: Array<SitemapEntry> = [];
  for (const entry of rawSitemapEntries) {
    const existingEntryForRoute = sitemapEntries.find(
      (e) => e.route === entry.route
    );
    if (existingEntryForRoute) {
      if (!isEqual(existingEntryForRoute, entry)) {
        console.warn(
          `Duplicate route for ${entry.route} with different sitemap data`,
          { entry, existingEntryForRoute }
        );
      }
    } else {
      sitemapEntries.push(entry);
    }
  }

  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${sitemapEntries.map((entry) => getEntry(entry)).join("")}
  </urlset>
    `.trim();
}

// robots
type RobotsPolicy = {
  type: "allow" | "disallow" | "sitemap" | "crawlDelay" | "userAgent";
  value: string;
};

const typeTextMap = {
  userAgent: "User-agent",
  allow: "Allow",
  disallow: "Disallow",
  sitemap: "Sitemap",
  crawlDelay: "Crawl-delay",
};
function getRobotsText(request: Request): string {
  const policies: RobotsPolicy[] = [
    {
      type: "userAgent",
      value: "*",
    },
    {
      type: "allow",
      value: "/",
    },
    { type: "sitemap", value: `${getDomainUrl(request)}/sitemap.xml` },
    { type: "disallow", value: "/admin" },
  ];

  return policies.reduce((acc, policy) => {
    const { type, value } = policy;
    return `${acc}${typeTextMap[type]}: ${value}\n`;
  }, "");
}

// meta
// type MetaFields =
//   | "title"
//   | "description"
//   | "twitter:card"
//   | "twitter:title"
//   | "twitter:description"
//   | "twitter:creator"
//   | "twitter:image"
//   | "og:title"
//   | "og:description"
//   | "og:image"
//   | "og:url"
//   | "og:type";

// const defaultTitle = "6+ | Front-End Developer";
// const defaultDescription =
//   "デジタル体験を加速させることで世界をより豊かにします。";

// const defaultMeta: Partial<Record<MetaFields, string>> = {
//   title: defaultTitle,
//   description: defaultDescription,
//   "og:title": defaultTitle,
//   "og:description": defaultDescription,
//   "og:type": "website",
//   "twitter:creator": "@6plusjp",
//   "twitter:card": "summary",
//   "twitter:title": defaultTitle,
//   "twitter:description": defaultDescription,
// };

function getMeta({
  url,
  title = "6+ | Front-End Developer",
  description = "デジタル体験を加速させることで世界をより豊かにします。",
  image,
  isArticle = false,
  keywords = "",
}: {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  isArticle?: boolean;
  keywords?: string;
}) {
  return {
    // ...defaultMeta,
    title,
    description,
    keywords,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:type": isArticle ? "article" : "website",
    ...(image
      ? {
          "og:image": image,
          "twitter:image": image,
          "twitter:card": "summary_large_image",
        }
      : null),
    "twitter:creator": "@6plusjp",
    "twitter:site": "@6plusjp",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:alt": title,
  };
}

// function getMetaImage({
//   origin,
//   // words,
//   url,
// }: {
//   origin: string;
//   // words: string;
//   // featuredImage: string;
//   url: string;
// }) {
//   const params = new URLSearchParams({
//     type: "1",
//     // words,
//     // img,
//     url,
//   });
//   return `${origin}/images/social?${params.toString()}`;
// }

export { getSitemapXml, getRobotsText, getMeta };
