import {
  ChevronDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";

const LINKS = [
  {
    svg: <ComputerDesktopIcon className="h-7 w-7 text-ts" />,
    title: "Coding",
    paragraphs: [
      "HTML、CSS、JavaScript（TypeScript）",
      "Remix / React",
      "可読性や保守性を意識した実装",
    ],
  },
  {
    svg: <CommandLineIcon className="h-7 w-7 text-ts" />,
    title: "UI/UX",
    paragraphs: [
      "アクセシビリティを意識した設計",
      "レスポンシブデザインとユーザー体験の改善",
    ],
  },
  {
    svg: <CodeBracketIcon className="h-7 w-7 text-ts" />,
    title: "Rust / CLI",
    paragraphs: [
      "ProtonVPN CLI を Rust で包んだ、vim風キー操作のTUIを個人開発",
      "clippy / rustfmt / 統合テスト（5ファイル）/ CIで品質を管理",
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
    svg: <GlobeAltIcon className="h-7 w-7 text-ts" />,
    title: "Overseas Experience",
    paragraphs: [
      "カナダ・トロントでの留学・滞在経験",
      "日本語リソースの少ない環境への適応",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="px-[5vw] py-16">
      <div className="container mx-auto">
        <h2 className="py-4 text-center text-3xl font-semibold text-tp sm:text-4xl">
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
