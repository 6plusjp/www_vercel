import type { MetaFunction } from "remix";

import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

import { getUrl } from "~/utils/misc";
import { getMeta } from "~/utils/seo";

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Privacy Policy | 6+";
  const description = "策定日: Aug 23, 2021";

  return {
    ...getMeta({
      url: getUrl(requestInfo),
      title,
      description,
    }),
  };
};

export default function Policy() {
  return (
    <div className="min-h-screen bg-bp duration-500">
      <Navbar />
      <div className="mx-auto max-w-6xl space-y-12 px-[5vw] pb-12 leading-loose text-ts">
        <div className="block space-y-4 py-8 text-tp sm:flex sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold sm:text-4xl">
            プライバシーポリシー
          </h1>
          <p className="text-sm sm:self-end sm:text-base">
            策定日: Aug 23, 2021
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
            個人情報取り扱いに関する基本方針
          </h2>
          <p className="mb-2">
            6+（以下「当サイト」）は個人情報の重要性を認識し、その保護を図ることが重要な社会的責務であると考え、個人情報に関する法令等を遵守し、個人情報を以下の方針に従って適切に取り扱います。
          </p>
          <p className="mb-8">
            また、このプライバシーポリシー（以下「本ポリシー」）の当事者は、当サイトと、本ポリシーに署名する者（以下「お客様」）です。本ポリシーは、お客様による当サイトの利用に適用されます。当サイトをご利用になることにより、お客様は本ポリシーの内容を確認したこと、本ポリシーに同意したものとなります。
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
            個人情報の取得と利用目的
          </h2>
          <p className="mb-2">
            当サイトが収集する個人情報とその利用目的は、以下のとおりです。お客様の同意なく情報の収集、目的外の利用を行うことはありません。
          </p>
          <ul className="mb-8">
            <li className="mb-2">
              <h4>(1) お客様からご提供いただく情報</h4>
              <ul className="list-inside list-disc">
                <li>
                  当サイトの利用に伴う連絡・各種お知らせ等の配信・送付のため
                </li>
              </ul>
            </li>
            <li>
              <h4>(2) お客様が利用するにあたって当サイトが収集する情報</h4>
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
            当サイトは個人情報について、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、あらかじめお客様の同意を得ないで第三者に提供しません。ただし、次の場合はこの限りではありません。
          </p>
          <ul className="mb-8 list-inside list-disc">
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
            個人情報の開示
          </h2>
          <p className="mb-2">
            (1)
            個人情報保護法の定めに基づき個人情報の開示を請求されたときは、お客様ご本人からの請求であることを確認した上で、お客様に対し、遅滞なく個人情報を開示します（当該個人情報が存在しないときはその旨を通知します）。ただし、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。また、個人情報に該当しない情報については、原則として開示いたしません。
          </p>
          <p className="mb-8">
            (2)
            個人情報の開示につきましては、手数料（１件あたり１０００円）をいただきます。
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
            免責事項
          </h2>
          <p className="mb-2">
            当サイトに掲載する情報について、できる限り正確な情報を提供するように努めておりますが、その内容の正確性、安全性を保証するものではありません。
          </p>
          <p className="mb-2">
            また、当サイトからリンクする他社が管理するウェブサイト（以下「リンク先」）における個人情報の安全確保については責任を負うことはできません。リンク先の個人情報保護につきましては、当該リンク先におけるプライバシーポリシー等をお客さまご自身でご確認くださいますようお願いします。
          </p>
          <p className="mb-8">
            当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属します。
            著作権や肖像権に関して問題がありましたら、お問い合わせフォームよりご連絡ください。確認後、迅速に対応いたします。
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="border-b border-hp text-xl text-tp sm:text-2xl">
            改訂
          </h2>
          <p className="mb-2">
            個人情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて本ポリシーを変更することがあります。
          </p>
        </div>
      </div>
      <Footer className="bg-bs duration-500" />
    </div>
  );
}
