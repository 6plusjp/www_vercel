import { useState } from "react";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import clsx from "clsx";
import {
  ArchiveIcon,
  ChatAltIcon,
  CodeIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";

import { ExternalLink } from "../external-link";
import { PythonIcon } from "../icons/python-icon";
import { ReactIcon } from "../icons/react-icon";
import { VueIcon } from "../icons/vue-icon";
import { SlackIcon } from "../icons/slack-icon";
import { FigmaIcon } from "../icons/figma-icon";
import { ChevronIcon } from "../icons/chevron-icon";
import { TSIcon } from "../icons/ts-icon";
import { Link } from "remix";

const TAB_DESKTOP = [
  {
    name: "TypeScript",
    svg: <TSIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Python",
    svg: <PythonIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://www.python.org",
  },
  {
    name: "React",
    svg: <ReactIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://reactjs.org",
  },
  {
    name: "Vue.js",
    svg: <VueIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://vuejs.org",
  },
  {
    name: "Figma",
    svg: <FigmaIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://www.figma.com",
  },
  {
    name: "slack",
    svg: <SlackIcon className="mx-auto sm:h-24 sm:w-24" />,
    link: "https://slack.com",
  },
];
const TAB_MOBILE = [
  {
    label: "Language",
    svg: <CodeIcon className="h-7 w-7" />,
    tools: [
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org",
      },
      {
        name: "Python",
        link: "https://www.python.org",
      },
    ],
  },
  {
    label: "Framework",
    svg: <ArchiveIcon className="h-7 w-7" />,
    tools: [
      {
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Vue.js",
        link: "https://vuejs.org",
      },
    ],
  },
  {
    label: "Design",
    svg: <ColorSwatchIcon className="h-7 w-7" />,
    tools: [
      {
        name: "Figma",
        link: "https://www.figma.com",
      },
      // {
      //   name: 'Framer',
      //   svg: (
      //     <ExternalLink
      //       href="https://www.framer.com/"
      //       className="ring-hp focus:outline-none grayscale opacity-75 hover:opacity-100 hover:grayscale-0"
      //     >
      //       <FramerIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
      //     </ExternalLink>
      //   ),
      //   link: 'https://www.framer.com/',
      // },
    ],
  },
  {
    label: "Chat",
    svg: <ChatAltIcon className="h-7 w-7" />,
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
    <section className="bg-bs py-16 px-[5vw] duration-500">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="py-4 text-center text-3xl font-bold text-tp sm:text-4xl">
            My Tools
          </h2>
          <div className="py-16">
            <Desktop />
            <Mobile />
          </div>
          <Link
            to="/my/uses"
            className="btn my-8 mx-auto bg-hp text-lg text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:border-black hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:border-black focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none dark:hover:border-white dark:focus:border-white"
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
  const [activeItem, setActiveItem] = useState(0);
  return (
    <Accordion
      index={activeItem}
      onChange={(index: number) => setActiveItem(index)}
      className="flex flex-col space-y-6 sm:hidden"
    >
      {TAB_MOBILE.map((tab, index) => (
        <AccordionItem className="space-y-4" key={index}>
          <ArrowButton active={activeItem === index}>
            {tab.svg}
            {tab.label}
          </ArrowButton>
          <AccordionPanel
            as="ul"
            className="list-inside list-disc space-y-2 p-2 text-base text-ts"
          >
            {tab.tools.map((tool, index) => (
              <ExternalLink
                href={tool.link}
                key={index}
                className="hover:text-hp focus:text-hp focus:outline-none"
              >
                <li>{tool.name}</li>
              </ExternalLink>
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
