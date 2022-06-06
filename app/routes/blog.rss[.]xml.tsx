import type { LoaderFunction } from "remix";
import { add, format, parseISO } from "date-fns";

import { getBlogPages } from "~/utils/post.server";
import { getDomainUrl } from "~/utils/misc";

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await getBlogPages("blog");

  const blogUrl = `${getDomainUrl(request)}/blog`;

  const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>6+ Blog</title>
        <link>${blogUrl}</link>
        <description>6+ Blog ではWEB関連の情報をお届けしています。</description>
        <language>en-us</language>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.title ?? "Untitled Post")}</title>
              <description>${cdata(
                post.description ?? "This post is... indescribable"
              )}</description>
              <pubDate>${format(
                add(
                  post.updated
                    ? parseISO(post.updated)
                    : post.published
                    ? parseISO(post.published)
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
