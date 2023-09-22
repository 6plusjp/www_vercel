import type { LoaderFunctionArgs } from "@vercel/remix";
import { format } from "date-fns";

import { getBlogPages } from "~/utils/post.server";
import { getDomainUrl } from "~/utils/misc";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const posts = await getBlogPages("blog");
  const blogUrl = `${getDomainUrl(request)}/blog`;

  const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>6+ Blog</title>
        <link>${blogUrl}</link>
        <description>6+ Blog ではWEB関連の情報をお届けしています。</description>
        <language>ja-JP</language>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${post.title ?? "Untitled Post"}</title>
              <description>${cdata(
                post.description ?? "This post is... indescribable",
              )}</description>
              <pubDate>${
                post.updated
                  ? format(
                      new Date(post.updated),
                      "E, d MMM yyyy HH:mm:ss XXXXX",
                    )
                  : post.published
                  ? format(
                      new Date(post.published),
                      "E, d MMM yyyy HH:mm:ss XXXXX",
                    )
                  : format(Date.now(), "E, d MMM yyyy HH:mm:ss XXXXX")
              }</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim(),
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
