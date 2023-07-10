import type { V2_MetaFunction } from "@vercel/remix";

import { getUrl } from "~/utils/misc";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => [
  ...getMeta({
    title: "Terms of Use | 6+",
    description: "準備中です。",
    url: `${getUrl()}/terms`,
  }),
];

export default function Terms() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-[5vw] pb-12 leading-loose text-ts min-h-max">
      <div className="block space-y-4 py-8 text-tp sm:flex sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold sm:text-4xl">利用規約</h1>
        <p className="text-sm sm:self-end sm:text-base">策定: 未定</p>
      </div>
      <div className="space-y-4 h-80">
        <p className="">ただいま作成中です。今しばらくお待ちください。</p>
      </div>
    </div>
  );
}
