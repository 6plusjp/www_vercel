import {
  ArchiveBoxIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "@remix-run/react";
import { forwardRef } from "react";

import { ExternalLink } from "../external-link";
import { ReactIcon } from "../icons/react-icon";
import { SlackIcon } from "../icons/slack-icon";
import { TSIcon } from "../icons/ts-icon";

const TAB_DESKTOP = [
  {
    name: "TypeScript",
    svg: <TSIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "React",
    svg: <ReactIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://reactjs.org",
  },
  {
    name: "Remix",
    svg: <ReactIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://remix.run",
  },
  // {
  //   name: "Figma",
  //   svg: <FigmaIcon className="mx-auto sm:h-24 sm:w-24" />,
  //   link: "https://www.figma.com",
  // },
  {
    name: "slack",
    svg: <SlackIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://slack.com",
  },
];
const TAB_MOBILE = [
  {
    label: "Language",
    svg: <CodeBracketIcon className="h-7 w-7 text-ts" />,
    tools: [
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org",
      },
    ],
  },
  {
    label: "Framework",
    svg: <ArchiveBoxIcon className="h-7 w-7 text-ts" />,
    tools: [
      {
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Remix",
        link: "https://remix.run",
      },
    ],
  },

  {
    label: "Others",
    svg: <ChatBubbleLeftRightIcon className="h-7 w-7 text-ts" />,
    tools: [
      {
        name: "slack",
        link: "https://slack.com",
      },
    ],
  },
];

export function ToolsSection() {
  return (
    <section className="bg-bs px-[5vw] py-16 duration-500">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="py-4 text-center text-3xl font-semibold text-tp sm:text-4xl">
            My Tools
          </h2>
          <div className="py-16">
            <Desktop />
            <Mobile />
          </div>
          <Link
            to="/uses"
            className="btn mx-auto my-8 bg-hp text-lg text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:border-black hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:border-black focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none dark:hover:border-white dark:focus:border-white"
          >
            詳細
          </Link>
        </div>
      </div>
    </section>
  );
}

function Desktop() {
  return (
    <>
      <div className="hidden items-center justify-center gap-2 sm:flex md:gap-4 lg:gap-8">
        {TAB_DESKTOP.map((tab) => (
          <ExternalLink
            href={tab.link}
            key={tab.name}
            className="opacity-75 ring-hp grayscale hover:opacity-100 hover:grayscale-0 focus:opacity-100 focus:outline-none focus:grayscale-0"
          >
            {tab.svg}
          </ExternalLink>
        ))}
      </div>
    </>
  );
}

function Mobile() {
  return (
    <Accordion.Root
      className="flex flex-col space-y-6 sm:hidden"
      type="single"
      defaultValue="Language"
      collapsible
    >
      {TAB_MOBILE.map(({ svg, label, tools }) => (
        <Accordion.Item className="space-y-4" key={label} value={label}>
          <AccordionTrigger>
            {svg}
            {label}
          </AccordionTrigger>
          <Accordion.Content>
            <ul className="list-inside list-disc space-y-2 p-2 text-base text-ts">
              {tools.map(({ name, link }) => (
                <li key={name}>
                  <ExternalLink
                    className="outline-none focus:ring ring-hp hover:text-hp"
                    href={link}
                  >
                    {name}
                  </ExternalLink>
                </li>
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
    <Accordion.Header className="flex w-full rounded-sm bg-bp text-lg text-tp">
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
