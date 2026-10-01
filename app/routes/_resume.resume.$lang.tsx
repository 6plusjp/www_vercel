import { Link, useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@vercel/remix";
import { json } from "@vercel/remix";

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
              Self-taught Web / Systems Developer with sustained self-directed
              study in web application and CLI tool development. Comfortable
              owning the full cycle - requirements, design, implementation,
              testing, and documentation - as a solo practitioner. Currently
              operating this site as a portfolio and service window for web
              development work.
            </p>
            <ul className="flex flex-wrap text-[#757d94]">
              <li className="pr-2 border-r border-[#757d94]">Self-taught Web / Systems Developer</li>
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
              Personal Projects
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
                  <div className="space-y-1 md:space-y-2 md:w-1/3">
                    <h2 className="font-bold">
                      <ExternalLink
                        className="hover:opacity-70"
                        href="https://6plus.vercel.app"
                      >
                        Portfolio Site
                      </ExternalLink>
                    </h2>
                    <div className="text-[#757d94]">Remix, TypeScript, Vercel</div>
                  </div>
                  <div className="space-y-2 md:w-2/3">
                    <ul className="list-inside list-disc space-y-1">
                      <li>
                        SSR application with 20 routes: blog, works, resume,
                        contact, policies, RSS, API
                      </li>
                      <li>
                        Playwright E2E test suite
                      </li>
                      <li>
                        Deployed and maintained on Vercel since 2022
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
                  <div className="space-y-1 md:space-y-2 md:w-1/3">
                    <h2 className="font-bold">
                      <ExternalLink
                        className="hover:opacity-70"
                        href="https://github.com/6plusjp/protonvpn-tui"
                      >
                        ProtonVPN Terminal UI
                      </ExternalLink>
                    </h2>
                    <div className="text-[#757d94]">Rust</div>
                  </div>
                  <div className="space-y-2 md:w-2/3">
                    <ul className="list-inside list-disc space-y-1">
                      <li>
                        TUI wrapping protonvpn-cli: country/city hierarchy
                        browsing, fuzzy search, connection session management
                      </li>
                      <li>
                        GitHub Actions CI, clippy/rustfmt lint config, integration
                        tests
                      </li>
                      <li>
                        107 issue resolution records + 6 coding policy documents
                      </li>
                      <li>
                        Approximately 12,000 lines of Rust, developed over 7 months (Mar-Oct 2026)
                      </li>
                    </ul>
                  </div>
                </div>
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
                  Faculty of Science, Department of Life and Environmental
                  Sciences
                </div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    One-year self-funded leave of absence: Toronto, Canada
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
                  <li>TypeScript, JavaScript</li>
                  <li>Rust</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-bold">Frontend</div>
                <ul>
                  <li>Remix, React, Next.js</li>
                  <li>Tailwind CSS, MDX</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-bold">Testing & Other</div>
                <ul>
                  <li>Playwright, Vitest</li>
                  <li>Git, Linux, REST API, Vercel</li>
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
  return (
    <>
      <div className="text-gray-500 bg-white px-4 py-12 md:px-16 md:py-28 shadow">
        <div className="space-y-10">
          <header>
            <h1 className="font-bold text-2xl text-center">職務経歴書</h1>
            <div className="justify-end items-center flex gap-x-1">
              <div className="text-right">
                <h3>2026年10月現在</h3>
                <h3>氏名: 山本 尚摩</h3>
                <Link to="/">
                  <h3>site: 6plus.vercel.app</h3>
                </Link>
              </div>
            </div>
          </header>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【職務要約】</h2>
            <p className="whitespace-pre-wrap">
実務経験はないが、独学で Web アプリケーション開発・CLI ツール開発を継続的に行っている。
Remix / TypeScript / Rust を中心に、設計・実装・テスト・ドキュメント作成までを
一人で完遂するスタイル。Web 開発業務の受付窓口としてこのサイトを運営している。
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">
              【活かせる経験・知識・技術】
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>TypeScript / JavaScript を用いた Web アプリケーション開発（Remix, React, Next.js）</li>
              <li>Rust による CLI / TUI アプリケーション開発</li>
              <li>E2E テスト（Playwright）・ユニットテスト（Vitest）の設計・運用</li>
              <li>MDX によるファイルベースコンテンツ管理</li>
              <li>Vercel への SSR デプロイと運用</li>
              <li>Linux（Arch Linux）環境での開発・自動プロビジョニング</li>
              <li>カナダ（トロント）での1年間の留学（自己負担）</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【主な個人プロジェクト】</h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <h3 className="font-bold">
                      <ExternalLink
                        className="hover:opacity-70"
                        href="https://6plus.vercel.app"
                      >
                        ポートフォリオサイト（このサイト）
                      </ExternalLink>
                    </h3>
                    <div className="text-gray-500">Remix, TypeScript, Vercel</div>
                  </div>
                  <div className="md:w-2/3 space-y-2">
                    <p>20ルートのSSRアプリケーション。ブログ/実績/履歴書/問い合わせ対応。</p>
                    <p>Playwright によるE2Eテスト実装。</p>
                    <p>2022年から継続的に開発・運用。20ルート、TS/TSX/CSSで約8,000行。</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <h3 className="font-bold">
                      <ExternalLink
                        className="hover:opacity-70"
                        href="https://github.com/6plusjp/protonvpn-tui"
                      >
                        ProtonVPN 用ターミナルUI
                      </ExternalLink>
                    </h3>
                    <div className="text-gray-500">Rust</div>
                  </div>
                  <div className="md:w-2/3 space-y-2">
                    <p>国・都市の階層ブラウズ・ファジー検索・接続セッション管理。</p>
                    <p>CI・Lint規約・統合テスト・Issue運用ドキュメントを整備。</p>
                    <p>2026-03〜2026-10の7ヶ月間、Rustソース約12,000行。MITライセンス。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【教育】</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <h3 className="font-bold">
                  <ExternalLink
                    className="hover:opacity-70"
                    href="https://www.osakafu-u.ac.jp/"
                  >
                    大阪公立大学（旧：大阪府立大学）
                  </ExternalLink>
                </h3>
                <div className="text-gray-500">2015 - 2020</div>
              </div>
              <div className="md:w-2/3 space-y-2">
                <p className="italic">理学部 生命環境科学科</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1年間休学し、カナダ（トロント）で留学（自己負担）</li>
                  <li>個人的理由により中退</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="font-bold text-lg text-hs">【習得スキル】</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
              <div className="space-y-2">
                <div className="font-bold">言語</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>TypeScript, JavaScript</li>
                  <li>Rust</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-bold">フレームワーク</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Remix, React, Next.js</li>
                  <li>Tailwind CSS, MDX</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-bold">テスト</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Playwright, Vitest</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-bold">その他</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Git, Linux, REST API, Vercel</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}