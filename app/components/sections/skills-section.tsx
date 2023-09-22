import { forwardRef } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const LINKS = [
  {
    svg: <ComputerDesktopIcon className="h-7 w-7 text-ts" />,
    title: "Coding",
    paragraphs: [
      "HTML、CSS、JavaScript（TypeScript）",
      "React、Vue.js、Svelteなどの多様なフレームワーク",
      "可読性や保守性の高い設計",
    ],
  },
  {
    svg: <CommandLineIcon className="h-7 w-7 text-ts" />,
    title: "UI/UX",
    paragraphs: [
      "あらゆるユーザーを考慮した、アクセシビリティを主軸に置いた設計",
      "ニーズに合わせたプロトタイプの試用、またそのフィードバックやデータからの改善",
    ],
  },
  {
    svg: <BriefcaseIcon className="h-7 w-7 text-ts" />,
    title: "Business Branding",
    paragraphs: [
      "SEOの内部施策を理解したURL設計、ページネーション、動的なタグ付け",
      "コンテンツに沿ったキーワード選定とページスピードの改善",
    ],
  },
  {
    svg: <PencilSquareIcon className="h-7 w-7 text-ts" />,
    title: "Content Writing",
    paragraphs: [
      "ブログのライティング",
      "Contentfulやwordpress等のCMSに頼らないコンテンツ管理",
    ],
  },
  {
    svg: <ArrowTrendingUpIcon className="h-7 w-7 text-ts" />,
    title: "Trending",
    paragraphs: [
      "RSSを駆使した情報収集",
      "目まぐるしく移り変わるトレンドに対応するためのミニマムな設計",
    ],
  },
  {
    svg: <GlobeAltIcon className="h-7 w-7 text-ts" />,
    title: "Overseas Experience",
    paragraphs: [
      "海外での就業経験",
      "日本語リソースの少ないサービスの早期習熟",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="px-[5vw] py-16">
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
          className="rounded bg-bs px-8 py-10 ring-2 ring-hp ring-offset-4 ring-offset-bp"
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
  return (
    <Accordion.Root
      className="flex flex-col space-y-6 sm:hidden"
      type="single"
      defaultValue="Coding"
      collapsible
    >
      {LINKS.map(({ svg, title, paragraphs }) => (
        <Accordion.Item className="space-y-4" key={title} value={title}>
          <AccordionTrigger>
            {svg}
            {title}
          </AccordionTrigger>
          <Accordion.Content>
            <ul className="list-inside list-disc space-y-2 p-2 text-base text-ts">
              {paragraphs.map((paragraph, index) => (
                <li key={index}>{paragraph}</li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<"button">
>(function AccordionTrigger({ children, ...props }, ref) {
  return (
    <Accordion.Header className="flex w-full rounded-sm bg-bs text-lg text-tp">
      <Accordion.Trigger
        className="group flex w-full items-center justify-between outline-none focus:text-hp px-6 py-3"
        ref={ref}
        {...props}
      >
        <span className="flex gap-2 items-center justify-center">
          {children}
        </span>
        <ChevronDownIcon
          className="w-6 h-6 group-data-[state=open]:rotate-180 text-ts"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
});
