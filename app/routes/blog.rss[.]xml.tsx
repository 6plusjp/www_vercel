import type { LoaderFunction } from "remix";

import * as dateFns from "date-fns";

import { getDomainUrl } from "~/utils/misc";
import { getBlogPages } from "~/utils/post.server";

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await getBlogPages("blog");

  const blogUrl = `${getDomainUrl(request)}/blog`;

  const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>6+ Blog</title>
        <link>${blogUrl}</link>
        <description>The 6+ Blog</description>
        <language>ja</language>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.title ?? "Untitled Post")}</title>
              <description>${cdata(
                post.description ?? "This post is... indescribable"
              )}</description>
              <pubDate>${dateFns.format(
                dateFns.add(
                  post.updated
                    ? dateFns.parseISO(post.updated)
                    : post.published
                    ? dateFns.parseISO(post.published)
                    : Date.now(),
                  { minutes: new Date().getTimezoneOffset() }
                ),
                "yyyy-MM-ii"
              )}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()
          )
          .join("\n")}
      </channel>
    </rss>
  `.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rss)),
    },
  });
};

function cdata(s: string) {
  return `<![CDATA[${s}]]>`;
}
