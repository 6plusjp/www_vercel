import { Link, useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@vercel/remix";
import { json } from "@vercel/remix";

import { Alert } from "~/components/alert";
import { ExternalLink } from "~/components/external-link";
import { SixPlusIcon } from "~/components/icons/six-plus-icon";
import { notFound } from "~/utils/responses";

export const loader = ({ params }: LoaderFunctionArgs) => {
  if (params.lang !== "en" && params.lang !== "ja")
    throw notFound("お探しのページは見つかりませんでした。");

  return json(params.lang);
};

export const meta = () => {
  return [{ title: "Shoma Yamamoto's Resume | 6+" }];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "/fonts/dm-serif-display/DMSerifDisplay-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];
};

export default function Resume() {
  const lang = useLoaderData<typeof loader>();

  return (
    <>
      <Alert state="warning">
        The contents are under development and may differ from the facts or
        change suddenly.
        <br />
        開発段階なので、内容が事実とは異なる場合や突然変更する可能性があります。
      </Alert>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between text-gray-500 px-4">
          <Link className="drop-shadow" to="/" prefetch="intent">
            <SixPlusIcon size={55} />
          </Link>
          <div className="flex items-center justify-center gap-x-2">
            <div className="py-2 sm:py-4 lg:py-6">
              Inspired by
              <br />
              <ExternalLink
                className="font-bold text-lg text-gray-600"
                href="https://standardresume.co"
              >
                Standard Resume
              </ExternalLink>
            </div>
            {lang === "en" && (
              <Link
                className="bg-white rounded-full flex items-center justify-center p-2 hover:scale-105 transition-transform"
                title="Download PDF resume"
                to="pdf"
                reloadDocument
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
        {lang === "en" ? <EnResume /> : <JaResume />}
      </div>
    </>
  );
}

function EnResume() {
  return (
    <>
      <div className="text-[#232E53] bg-white px-6 py-12 md:p-14 lg:py-20 lg:px-24 overflow-hidden shadow">
        <div className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-dm-serif-display !leading-[.9] text-hs mb-8">
              Shoma
              <br />
              Yamamoto
            </h1>
            <p className="text-base md:text-xl mb-4">
              Self-taught, dedicated and highly motivated Web Developer with a
              passion for the acquisition of new skills and knowledge. Familiar
              with most major technology stacks and platforms. Strong focus on
              user experience and accessibility. Believe that committing to
              share expectations and goals with a team is key to any successful
              project delivered.
            </p>
            <ul className="flex flex-wrap text-[#757d94]">
              <li className="pr-2 border-r border-[#757d94]">Web Developer</li>
              <li className="px-2 border-r border-[#757d94]">Osaka, JP</li>
              <li className="px-2 border-r border-[#757d94]">
                6plusjp@gmail.com
              </li>
              <li className="pl-2">
                <ExternalLink
                  className="hover:opacity-70"
                  href="https://github.com/6plusjp"
                >
                  github.com/6plusjp
                </ExternalLink>
              </li>
            </ul>
          </header>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl text-hs font-dm-serif-display">
              Work Experience
            </h2>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
              <div className="space-y-1 md:space-y-2 md:w-1/3">
                <h2 className="font-bold">Freelance</h2>
                <div className="text-[#757d94]">Apr 2020 - Current</div>
              </div>
              <div className="space-y-2 md:w-2/3">
                <div className="italic">
                  Web Developer - Web apps and websites creation. Graphic
                  design. Product development.
                </div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Tech stack is predominantly React, Typescript, Jest/React
                    Testing Library and Tailwind CSS, using a rest API built in
                    Node.
                  </li>
                  <li>
                    Selected tech stack and libraries according to the
                    specifications of the site requested by the clients.
                  </li>
                  <li>
                    Topics include content marketing, landing page
                    copy/design/optimization, and more.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl text-hs font-dm-serif-display">
              Education
            </h2>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
              <div className="space-y-1 md:space-y-2 md:w-1/3">
                <h2 className="font-bold">
                  <ExternalLink
                    className="hover:opacity-70"
                    href="https://www.osakafu-u.ac.jp/en/"
                  >
                    Osaka Prefecture University
                  </ExternalLink>
                  <br />
                  <ExternalLink
                    className="hover:opacity-70"
                    href="https://www.omu.ac.jp/en/"
                  >
                    (now Osaka Metropolitan University)
                  </ExternalLink>
                </h2>
                <div className="text-[#757d94]">2015 - 2020</div>
              </div>
              <div className="space-y-2 md:w-2/3">
                <div className="italic">
                  Science, College of Life, Environment, and Advanced Sciences
                </div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Leave of absence and study abroad year at personal expense.
                  </li>
                  <li>Withdrawn from school for personal reasons.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-8 md:flex block md:space-y-0">
            <h2 className="text-2xl md:text-3xl text-hs font-dm-serif-display md:w-1/3">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:w-2/3">
              <div className="space-y-1">
                <div className="font-bold">Languages</div>
                <ul>
                  <li>JavaScript, TypeScript</li>
                  <li>Python</li>
                  <li>Rust</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-bold">Frameworks</div>
                <ul>
                  <li>Remix</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-bold">Other</div>
                <ul>
                  <li>Git</li>
                  <li>REST API</li>
                  <li>Linux</li>
                  <li>Unit testing</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function JaResume() {
  //TODO - change the layout itself to make it more stylish
  return (
    <>
      <div className="text-gray-500 bg-white px-4 py-12 md:px-16 md:py-28 shadow">
        <div className="space-y-10">
          <header>
            <h1 className="font-bold text-2xl text-center">職務経歴書</h1>
            <div className="justify-end items-center flex gap-x-1">
              <div className="text-right">
                <h3>2023年9月現在</h3>
                <h3>氏名: 山本 尚摩</h3>
                <Link to="/">
                  <h3>site: 6plus.tech</h3>
                </Link>
              </div>
            </div>
          </header>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【職務要約】</h2>
            <p>
              株式会社○○○○○に入社後、約x年間、自社サービスのシステム開発に従事し、要件定義や設計などの上流工程から、開発やテストまでを一貫して担当しています。20xx年からは女性向け通販サイト新規構築のプロジェクトリーダーを担当。全体の進捗管理や、企画部門、営業部門との調整なども行いました。結果として、サイトリリース後約xカ月で検索順位x位にまで上昇させ、利用者数も目標のxxxで達成できています。
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">
              【活かせる経験・知識・技術】
            </h2>
            <ul>
              <li>・PHP、Javaのプログラミング</li>
              <li>・約xx名規模のリーダー経験</li>
              <li>・新規サイト構築の経験</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【職務経歴】</h2>
            <table className="table-auto">
              <thead className="text-left">
                <tr>
                  <th className="p-4">
                    20xx年xx月～現在 女性向け通販サイトの開発
                  </th>
                  <th className="p-4">開発環境</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    【プロジェクト概要】
                    女性向け雑貨、洋服の販売、コンテンツやコラム配信などの通販サイトの新規構築。
                    【担当フェーズ】
                    要件定義、設計、開発、テスト、運用保守、進捗管理
                    【業務内容】 ・ユーザーごとのおすすめ機能を実装
                    ・ターゲットに合わせたビジュアルの設計
                    ・突発的な改修にも対応できるように設計
                    ・サイト内検索機能の最適化 ・サーバ関連の運用
                    【実績・取り組み】
                    ・サイトリリース後、約xカ月で検索順位x位に上昇。
                    ・リリース後の目標利用者数xxx％を達成。
                  </td>
                  <td>
                    【言語】 PHP JavaScript CSS 【OS】 Windows 【DB】 SQL Server
                    Oracle 【フレームワーク】 Laravel
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table-auto">
              <thead className="text-left">
                <tr>
                  <th className="p-4">
                    20xx年xx月～20xx年xx月 会場予約サイトの改修
                  </th>
                  <th className="p-4">開発環境</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    【プロジェクト概要】
                    ユーザビリティと店舗情報管理の利便性を向上させるためのリニューアルを実施。
                    【担当フェーズ】 設計、開発、テスト、運用保守 【業務内容】
                    ・予約状況のレスポンスを高速化させるためのUI設計
                    ・登録店舗側を考慮し、サイト経由ではない予約も一緒に管理できるようにデータを設計
                    【実績・取り組み】
                    ・レスポンスの高速化など利便性が向上したことにより、リニューアル後の利用ユーザー数が前年比xx増加。
                    ・登録店舗数もリニューアル後、xx増加。
                  </td>
                  <td>
                    【言語】 PHP JavaScript 【OS】 Windows Linux 【DB】 SQL
                    Server Oracle 【フレームワーク】 Laravel
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【習得スキル】</h2>
            <table className="table-auto">
              <tbody>
                <tr>
                  <th className="border text-left p-4" rowSpan={4}>
                    OS
                  </th>
                </tr>
                <tr>
                  <td className="border p-3">Windows</td>
                  <td className="border p-3">x年xヶ月</td>
                  <td className="border p-3">環境設計・構築が可能</td>
                </tr>
                <tr>
                  <td className="border p-3">Linux</td>
                  <td className="border p-3">x年xヶ月</td>
                  <td className="border p-3">環境設計・構築が可能</td>
                </tr>
                <tr>
                  <td className="border p-3">AIX</td>
                  <td className="border p-3">x年xヶ月</td>
                  <td className="border p-3">環境設計・構築が可能</td>
                </tr>
                <tr>
                  <th className="border text-left p-4" rowSpan={5}>
                    言語
                  </th>
                </tr>
                <tr>
                  <td className="border p-3">PHP</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">
                    最適なコード記述と、指示、改修が可能
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Java</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">
                    最適なコード記述と、指示、改修が可能
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">JavaScript</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">
                    最適なコード記述と、指示、改修が可能
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">CSS</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">基本的なプログラミングが可能</td>
                </tr>
                <tr>
                  <th className="border text-left p-4" rowSpan={3}>
                    DB
                  </th>
                </tr>
                <tr>
                  <td className="border p-3">SQL Server</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">基本的な環境構築が可能</td>
                </tr>
                <tr>
                  <td className="border p-3">Oracle</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">基本的な環境構築が可能</td>
                </tr>
                <tr>
                  <th className="border text-left p-4" rowSpan={2}>
                    フレームワーク
                  </th>
                </tr>
                <tr>
                  <td className="border p-3">Laravel</td>
                  <td className="border p-3">x年xカ月</td>
                  <td className="border p-3">基本的な環境構築が可能</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}
