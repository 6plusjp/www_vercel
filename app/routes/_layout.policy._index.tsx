import type { V2_MetaFunction } from "@vercel/remix";
import { ExternalLink } from "~/components/external-link";

import { getUrl } from "~/utils/misc";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => [
  ...getMeta({
    title: "Privacy Policy | 6+",
    description:
      "6+ は個人情報の重要性を認識し、その保護を図ることが重要な社会的責務であると考え、個人情報に関する法令等を遵守し、個人情報を以下の方針に従って適切に取り扱います。",
    url: `${getUrl()}/policy`,
  }),
];

export default function Policy() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-[5vw] pb-12 leading-loose text-ts">
      <div className="block space-y-4 py-8 text-tp sm:flex sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold sm:text-4xl">プライバシーポリシー</h1>
        <p className="text-sm sm:self-end sm:text-base">Jul 19, 2023</p>
      </div>
      <div className="space-y-4">
        <p className="mb-2">
          6+
          のウェブサイト（以下「当サイト」といいます。）または関連するフィード、ソーシャルメディア、ニュースレター、ソースコード、リポジトリ、および電子メール（以下当サイトと総称して「当サービス」といいます。）は個人情報の重要性を認識し、その保護を図ることが重要な社会的責務であると考え、個人情報に関する法令等を遵守し、以下の方針に従って適切に取り扱います。
        </p>
        <p className="mb-8">
          当サービスを使用する前に、本ポリシーをよくお読みください。当サービスへのアクセスまたは登録を行うことによって、皆様は本ポリシーに従うことに同意するものとします。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          「個人情報」の定義
        </h2>
        <p className="mb-2">
          「個人情報」とは、皆様を直接特定する情報（氏名やメールアドレス、請求情報など）、またはリンクすることもしくは組み合わせることで合理的に皆様を特定できる情報（アカウント識別番号や
          IP アドレスなど）をいいます。
        </p>
        <p className="mb-8">
          この定義に該当しない情報は、すべて「非個人情報」となります。個人情報を含む一連のデータからすべての個人情報が削除された場合、残りの情報は非個人情報となります。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          個人情報の取得と利用目的
        </h2>
        <p className="mb-2">
          当サイトが収集する個人情報とその利用目的は、以下のとおりです。皆様の同意なく、情報の収集、目的外の利用を行うことはありません。
        </p>
        <ul className="mb-8">
          <li className="mb-2">
            <h4>(1) ご提供いただく情報</h4>
            <ul className="list-inside list-disc">
              <li>
                当サイトの利用に伴う連絡・各種お知らせ等の配信・送付のため
              </li>
            </ul>
          </li>
          <li>
            <h4>(2) 皆様が利用するにあたり、当サイトが収集する情報</h4>
            <ul className="list-inside list-disc">
              <li>当サイトの改善・開発およびマーケティングのため</li>
              <li>規約等で禁じている行為などの調査のため</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          個人情報の第三者への提供
        </h2>
        <p className="mb-2">
          当サービスは、法令により開示を求められた場合等、正当な理由がある場合を除き、第三者に個人情報を開示、提供することはありません。ただし、次の場合はこの限りではありません。
        </p>
        <ul className="mb-8 list-inside list-disc">
          <li className="mb-1">事前に皆様の許可を得た場合</li>
          <li className="mb-1">
            当サイトが利用目的の達成に必要な範囲内において利用者情報の取扱いの全部または一部を委託する場合
          </li>
          <li>
            利用者情報を特定の者との間で共同して利用する場合であって、その旨ならびに共同して利用される利用者情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該利用者情報の管理について責任を有する者の氏名又は名称について、あらかじめご本人に通知し、又はご本人が容易に知り得る状態に置いているとき
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          Cookie
        </h2>
        <p className="mb-2">
          Cookie とは、Web
          サイトがユーザーのコンピューターに配置する小さなファイルのことです。多くの
          Web サイトと同様に、当サイトでは Cookie を使用しています。 Cookie
          は、ページ間を効率的に移動できるようにしたり、設定を記憶したり、一般的にユーザーエクスペリエンスを向上させたりするなど、さまざまな役割を果たします。また、マーケティングの効果を測定するために使用され、ユーザーが
          Web
          サイトの機能をより適切かつ有用に使用できるよう支援します。ただし、この
          Cookie により記録される情報は、皆様個人を特定するものではありません。
        </p>
        <p className="mb-2">
          Cookie の詳細については、
          <ExternalLink
            className="hover:underline focus:underline text-blue-500"
            href="https://www.allaboutcookies.org/"
          >
            all about COOKIES
          </ExternalLink>
          をご覧ください。このサイトには、クッキーに関するその他の有用な情報や、さまざまな種類のブラウザを使用してクッキーをブロックする方法が記載されています。
        </p>
        <p className="mb-8">
          当サイトでは、サイト閲覧状況の統計的な把握および最適なサイト表示等を目的として、
          <ExternalLink
            className="hover:underline focus:underline text-blue-500"
            href="https://vercel.com/analytics"
          >
            Vercel Web Analytics
          </ExternalLink>
          を使用しています。
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
          本ポリシーの適用・変更
        </h2>
        <p className="mb-8">
          本ポリシーは、任意に変更されることがあります。また、本ポリシーの変更は、当サイトに掲載した時点より効力を生じるものとします。
        </p>
      </div>
    </div>
  );
}
