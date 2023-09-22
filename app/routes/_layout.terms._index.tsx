import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";

import { getUrl } from "~/utils/misc";
import { getMeta } from "~/utils/seo";

export const meta: MetaFunction = () => [
  ...getMeta({
    title: "Terms of Use | 6+",
    description:
      "本利用規約は、6+のウェブサイトまたは関連するフィード、ソーシャルメディア、ニュースレター、ソースコード、リポジトリ、および電子メールのご利用にあたっての皆様の権利および義務について規定するものです",
    url: `${getUrl()}/terms`,
  }),
];

export default function Terms() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-[5vw] pb-12 leading-loose text-ts min-h-max">
      <div className="block space-y-4 py-8 text-tp sm:flex sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold sm:text-4xl">利用規約</h1>
        <p className="text-sm sm:self-end sm:text-base">Jul 19, 2023</p>
      </div>
      <div className="space-y-4">
        <p className="mb-2">
          本利用規約（以下「本規約」といいます。）は、6+
          のウェブサイト（以下「当サイト」といいます。）または関連するフィード、ソーシャルメディア、ニュースレター、ソースコード、リポジトリ、および電子メール（以下当サイトと総称して「当サービス」といいます。）のご利用にあたっての皆様の権利および義務について規定するものです。
        </p>
        <p className="mb-8">
          当サービスを使用する前に、本規約をよくお読みください。当サービスへのアクセスまたは登録を行うことによって、皆様は本規約に従うことに同意するものとします。当サイトには、他者が提供するリンクに接続するものもあり、これは別途定められる利用規約に従います。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          知的財産権
        </h2>
        <p className="mb-2">
          当サービスには、画像、文章、音声等ならびにその他すべての素材などのコンテンツ（以下総称して「当コンテンツ」といいます。）が含まれます。当コンテンツは、6+
          およびその他のソースによって、作成されています。以下の事項に留意してください。
        </p>
        <ul className="mb-8 list-disc list-inside space-y-2">
          <li>
            当コンテンツは、各著作者に帰属しています。これらの著作権は、著作権法等で保護されています。従って、私的使用などの適用ある著作権法で認められる場合を除き、皆様が当コンテンツを使用することはできません。各著作者の許諾なしにコンテンツを使用した場合は、本規約に違反するほか、著作権法違反等にあたる可能性がありますので、ご注意ください。
          </li>
          <li>
            当サービスの中には、6+
            およびその他の者の商標、トレードドレス、ロゴおよびブランド（以下「商標」といいます。）を含むものがあります。商標は、限られた状況下を除いて、商標の所有者による事前の書面による許可を得なければ、使用することができません。
          </li>
          <li>
            当サイトに使用されているソフトウェアは、MPL
            または類似の許諾用オープンソースライセンスに基づいて、その使用が許諾されています。特定のライセンスに関する詳細については、該当するソースコードまたは
            GitHub のリポジトリをご覧ください。
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          保証について
        </h2>
        <p className="mb-8">
          当サービスは、コンテンツに関して正確性の確保に努めていますが、その完全さに関していかなる保証をするものではありません。また、コンテンツは、予告なく変更されることがありますので、あらかじめご了承ください。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          プライバシーポリシー
        </h2>
        <p className="mb-8">
          <Link
            className="focus:underline hover:underline text-blue-500"
            to={"/policy"}
          >
            プライバシーポリシーに関するページ
          </Link>
          では、当サービスに関連して、皆様から収集する個人情報をどのように取り扱うかについて説明しています。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          免責について
        </h2>
        <p className="mb-2">
          当サービスは、すべての不具合を含む「現状有姿」で提供されます。法によって認められる範囲において、6+
          および被補償当事者は、明示または黙示を問わず、一切の保証をいたしません。皆様は、当サービスの利用ならびに品質およびパフォーマンスについて、すべてのリスクを負っています。これらには、皆様のハードウェア、ソフトウェアもしくはコンテンツが削除もしくは破壊されるリスク、または第三者が皆様の情報に不正にアクセスするリスクを含みますがこれらに限定されません。
        </p>
        <p className="mb-8">
          法が要求する場合を除き、6+
          および被補償当事者は、本規約または当サービスの利用もしくはこれを利用できなかったことに起因するか何らかの形で関連する損害について、そのような損害発生の可能性について事前に知らされていたかどうか、また、かかるクレームの根拠となっている法的責任の根拠を問わず、いかなる責任も負いません。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          本規約の適用・変更
        </h2>
        <p className="mb-2">
          本規約は、当サービスが終了するまで、継続して適用されます。皆様は、当サービスの利用を中止することおよび該当する場合にはアカウントを削除することによって、理由の如何を問わず、いつでも本規約を終了することができます。ただし、「免責」の条項は、継続して適用されるものとします。
        </p>
        <p className="mb-8">
          本規約は、任意に変更されることがあります。また、本規約の変更は、当サイトに掲載した時点より効力を生じるものとします。
        </p>
      </div>
    </div>
  );
}
