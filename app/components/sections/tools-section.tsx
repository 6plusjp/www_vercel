import * as React from "react";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabsOrientation,
} from "@reach/tabs";
import { motion } from "framer-motion";
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

const TAB_DATA = [
  {
    label: "Language",
    svg: <CodeIcon className="h-7 w-7" />,
    tool: [
      {
        name: "TypeScript",
        svg: (
          <ExternalLink
            href="https://www.typescriptlang.org/"
            className="opacty-40 ring-hp contrast-[400] grayscale hover:opacity-100 hover:contrast-100 hover:grayscale-0 focus:outline-none"
          >
            <TSIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
          </ExternalLink>
        ),
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Python",
        svg: (
          <ExternalLink
            href="https://www.python.org/"
            className="opacty-40 ring-hp contrast-[400] grayscale hover:opacity-100 hover:contrast-100 hover:grayscale-0 focus:outline-none"
          >
            <PythonIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
          </ExternalLink>
        ),
        link: "https://www.python.org/",
      },
    ],
  },
  {
    label: "Framework",
    svg: <ArchiveIcon className="h-7 w-7" />,
    tool: [
      {
        name: "React",
        svg: (
          <ExternalLink
            href="https://reactjs.org/"
            className="opacty-40 ring-hp contrast-[400] grayscale hover:opacity-100 hover:contrast-100 hover:grayscale-0 focus:outline-none"
          >
            <ReactIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
          </ExternalLink>
        ),
        link: "https://reactjs.org/",
      },
      {
        name: "Vue.js",
        svg: (
          <ExternalLink
            href="https://vuejs.org/"
            className="opacty-40 ring-hp contrast-[400] grayscale hover:opacity-100 hover:contrast-100 hover:grayscale-0 focus:outline-none"
          >
            <VueIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
          </ExternalLink>
        ),
        link: "https://vuejs.org/",
      },
    ],
  },
  {
    label: "Design",
    svg: <ColorSwatchIcon className="h-7 w-7" />,
    tool: [
      {
        name: "Figma",
        svg: (
          <ExternalLink
            href="https://www.figma.com/"
            className="opacty-40 ring-hp contrast-[400] grayscale hover:opacity-100 hover:contrast-100 hover:grayscale-0 focus:outline-none"
          >
            <FigmaIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
          </ExternalLink>
        ),
        link: "https://www.figma.com/",
      },
      // {
      //   name: 'Framer',
      //   svg: (
      //     <ExternalLink
      //       href="https://www.framer.com/"
      //       className="ring-hp focus:outline-none grayscale contrast-[400] opacty-40 hover:opacity-100 hover:contrast-100 hover:grayscale-0"
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
    tool: [
      {
        name: "slack",
        svg: (
          <ExternalLink
            href="https://slack.com/"
            className="opacty-40 ring-hp grayscale hover:opacity-100 hover:grayscale-0 focus:outline-none"
          >
            <SlackIcon className="mx-auto h-8 w-8 sm:h-24 sm:w-24" />
          </ExternalLink>
        ),
        link: "https://slack.com/",
      },
    ],
  },
];

export function ToolsSection() {
  return (
    <section className="py-16 px-[5vw]">
      <div className="container mx-auto">
        <h2 className="py-4 text-center text-3xl font-bold text-tp sm:text-4xl">
          My Tools
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
    <Tabs
      className="hidden flex-col items-center justify-center space-y-8 sm:flex"
      orientation={TabsOrientation.Horizontal}
    >
      <TabList className="group flex gap-2 rounded bg-bs p-2">
        {TAB_DATA.map((tab, index) => (
          <Tab
            className="flex w-36 items-center justify-center gap-1 rounded-2xl bg-transparent py-2 text-lg text-tp ring-tp hover:bg-bp focus:outline-none focus:ring-2"
            key={index}
          >
            {tab.svg}
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="w-full text-ts">
        {TAB_DATA.map((tab, index) => (
          <TabPanel
            key={index}
            className="rounded bg-bs ring-hp ring-offset-4 ring-offset-bp duration-300 focus:outline-none focus:ring-2"
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              {tab.tool.map((tool, index) => (
                <div key={index} className="p-6">
                  {tool.svg}
                  <h4 className="text-center">{tool.name}</h4>
                </div>
              ))}
            </motion.div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
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
      {TAB_DATA.map((tab, index) => (
        <AccordionItem className="space-y-4" key={index}>
          <ArrowButton active={activeItem === index}>
            {tab.svg}
            {tab.label}
          </ArrowButton>
          <AccordionPanel
            as="ul"
            className="list-inside list-disc space-y-2 p-2 text-base text-ts"
          >
            {tab.tool.map((tool, index) => (
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
        "flex w-full justify-between rounded-sm bg-bs px-6 py-3 text-lg text-tp outline-none focus:text-hp",
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
