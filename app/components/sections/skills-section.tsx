import * as React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import clsx from "clsx";
import {
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeIcon,
  PencilAltIcon,
  TerminalIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

import { ChevronIcon } from "../icons/chevron-icon";

const LINKS = [
  {
    svg: <DesktopComputerIcon className="h-7 w-7" />,
    title: "Coding",
    paragraphs: [
      "HTML、CSS、JavaScript（TypeScript）",
      "React、Vue.js、Svelteなどの多様なフレームワーク",
      "可読性や保守性の高い設計",
    ],
  },
  {
    svg: <TerminalIcon className="h-7 w-7" />,
    title: "UI/UX",
    paragraphs: [
      "あらゆるユーザーを考慮した、アクセシビリティを主軸に置いた設計",
      "ニーズに合わせたプロトタイプの試用、またそのフィードバックやデータからの改善",
    ],
  },
  {
    svg: <BriefcaseIcon className="h-7 w-7" />,
    title: "Business Branding",
    paragraphs: [
      "SEOの内部施策を理解したURL設計、ページネーション、動的なタグ付け",
      "コンテンツに沿ったキーワード選定とページスピードの改善",
    ],
  },
  {
    svg: <PencilAltIcon className="h-7 w-7" />,
    title: "Content Writing",
    paragraphs: [
      "ブログのライティング",
      "Contentfulやwordpress等のCMSに頼らないコンテンツ管理",
    ],
  },
  {
    svg: <TrendingUpIcon className="h-7 w-7" />,
    title: "Trending",
    paragraphs: [
      "RSSを駆使した情報収集",
      "目まぐるしく移り変わるトレンドに対応するためのミニマムな設計",
    ],
  },
  {
    svg: <GlobeIcon className="h-7 w-7" />,
    title: "Overseas Experience",
    paragraphs: [
      "海外での就業経験",
      "日本語リソースの少ないサービスの早期習熟",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="bg-bs py-16 px-[5vw] duration-500">
      <div className="container mx-auto">
        <h2 className="py-4 text-center text-3xl font-bold text-tp sm:text-4xl">
          My Skills
        </h2>
        <div className="py-16">
          <Desktop />
          <Mobile />
        </div>
      </div>
    </section>
  );
}

function Desktop() {
  return (
    <div className="hidden gap-12 sm:grid md:grid-cols-2 lg:grid-cols-3">
      {LINKS.map((link, index) => (
        <div
          className="rounded bg-bp px-8 py-10 ring-2 ring-hp ring-offset-4 ring-offset-bs"
          key={index}
        >
          <h3 className="mb-4 flex gap-4 text-xl text-tp">
            {link.svg}
            {link.title}
          </h3>
          <ul className="list-inside list-disc space-y-2 px-2 text-base text-ts">
            {link.paragraphs.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Mobile() {
  const [activeItem, setActiveItem] = React.useState(0);
  return (
    <Accordion
      index={activeItem}
      onChange={(index: number) => setActiveItem(index)}
      className="flex flex-col space-y-6 sm:hidden"
    >
      {LINKS.map((link, index) => (
        <AccordionItem className="space-y-4" key={index}>
          <ArrowButton active={activeItem === index}>
            {link.svg}
            {link.title}
          </ArrowButton>
          <AccordionPanel
            as="ul"
            className="list-inside list-disc space-y-2 p-2 text-base text-ts"
          >
            {link.paragraphs.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

interface Props {
  children: React.ReactNode;
  active: boolean;
}
function ArrowButton({ children, active }: Props) {
  return (
    <AccordionButton
      className={clsx(
        "flex w-full justify-between rounded-sm bg-bp px-6 py-3 text-lg text-tp outline-none focus:text-hp",
        { "hover:text-hp": !active }
      )}
    >
      <h4 className="inline-flex gap-2">{children}</h4>
      <ChevronIcon
        direction={active ? "up" : "down"}
        size={18}
        className="self-center ease-out"
      />
    </AccordionButton>
  );
}
