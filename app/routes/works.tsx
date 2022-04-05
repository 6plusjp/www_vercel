import * as React from "react";
import type { MetaFunction } from "remix";

import { Navbar } from "~/components/navbar";
import { getUrl } from "~/utils/misc";
import { getMeta } from "~/utils/seo";

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Works | 6+";

  return {
    ...getMeta({
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      title,
    }),
  };
};

export default function Works() {
  return (
    <div className="relative h-screen bg-bp duration-500">
      <Navbar />
      <h2 className="absolute top-1/2 w-full text-center text-lg text-tp sm:text-2xl lg:text-4xl">
        準備中です。今しばらくお待ちください。
      </h2>
    </div>
  );
}
